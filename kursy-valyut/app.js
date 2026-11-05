/* Конвертер валют (отдельный сайт). Все курсы внутри — «единиц валюты за 1 EUR».
   Источники по порядку: 1) живой API  2) последний сохранённый в браузере
   3) встроенные СРЕДНИЕ курсы (FALLBACK ниже). */

const CURRENCIES = [
  { code: "RUB", name: "Российский рубль" }, { code: "EUR", name: "Евро" },
  { code: "USD", name: "Доллар США" },       { code: "CZK", name: "Чешская крона" },
  { code: "GBP", name: "Британский фунт" },  { code: "PLN", name: "Польский злотый" },
  { code: "CHF", name: "Швейцарский франк" },{ code: "CNY", name: "Китайский юань" },
  { code: "UAH", name: "Украинская гривна" },{ code: "TRY", name: "Турецкая лира" },
  { code: "KZT", name: "Казахстанский тенге" }, { code: "JPY", name: "Японская иена" }
];

/* Средние (ориентировочные) курсы за 1 EUR. Обновляй время от времени. */
const FALLBACK_DATE = "среднее за 2025";
const FALLBACK = { EUR: 1, USD: 1.10, RUB: 100, CZK: 25.0, GBP: 0.85, PLN: 4.3, CHF: 0.95, CNY: 7.9, UAH: 44, TRY: 38, KZT: 540, JPY: 165 };

const CACHE_KEY = "kursy_valyut_v1";

async function fetchErApi() {
  const r = await fetch("https://open.er-api.com/v6/latest/EUR");
  if (!r.ok) throw new Error("er-api " + r.status);
  const j = await r.json();
  if (j.result !== "success" || !j.rates) throw new Error("er-api data");
  return { rates: j.rates, date: (j.time_last_update_utc || "").slice(5, 16) };
}
async function fetchCbr() {                       // Банк России: рубли за единицу -> пересчёт на EUR
  const r = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
  if (!r.ok) throw new Error("cbr " + r.status);
  const j = await r.json();
  const rub = { RUB: 1 };
  Object.keys(j.Valute).forEach(c => { rub[c] = j.Valute[c].Value / j.Valute[c].Nominal; });
  if (!rub.EUR) throw new Error("cbr EUR");
  const per = {}; Object.keys(rub).forEach(c => { per[c] = rub.EUR / rub[c]; });
  return { rates: per, date: (j.Date || "").slice(0, 10) };
}
async function loadRates() {
  for (const fn of [fetchErApi, fetchCbr]) {
    try {
      const res = await fn();
      const have = CURRENCIES.filter(c => res.rates[c.code] > 0);
      if (have.some(c => c.code === "RUB") && have.some(c => c.code === "USD")) {
        // валюты, которых нет в источнике, добираем из средних
        const rates = Object.assign({}, FALLBACK, res.rates);
        const out = { rates, date: res.date, source: "live" };
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(out)); } catch (e) {}
        return out;
      }
    } catch (e) { /* следующий источник */ }
  }
  try { const c = JSON.parse(localStorage.getItem(CACHE_KEY)); if (c && c.rates) return { rates: c.rates, date: c.date, source: "cache" }; } catch (e) {}
  return { rates: FALLBACK, date: FALLBACK_DATE, source: "fallback" };
}

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
function fmt(n) {
  const a = Math.abs(n), d = a >= 1000 ? 0 : a >= 1 ? 2 : a >= 0.01 ? 4 : 6;
  return n.toLocaleString("ru-RU", { minimumFractionDigits: a >= 1000 ? 0 : 2, maximumFractionDigits: d });
}

let data = { rates: FALLBACK, date: FALLBACK_DATE, source: "fallback" };
const conv = (x, f, t) => x / data.rates[f] * data.rates[t];

function fillSelect(el, sel) {
  el.innerHTML = CURRENCIES.map(c => '<option value="' + c.code + '"' + (c.code === sel ? " selected" : "") + ">" + c.code + " — " + esc(c.name) + "</option>").join("");
}

function draw() {
  const amt = parseFloat($("amount").value), f = $("from").value, t = $("to").value;
  $("result").innerHTML = isNaN(amt) ? "Введите сумму" :
    esc(fmt(amt) + " " + f) + " = <b>" + esc(fmt(conv(amt, f, t)) + " " + t) + "</b><small>1 " + esc(f) + " = " + esc(fmt(conv(1, f, t))) + " " + esc(t) + "</small>";

  const base = $("base").value;
  $("grid").innerHTML = CURRENCIES.filter(c => c.code !== base).map(c =>
    '<button type="button" class="rate" data-code="' + c.code + '"><span class="code">' + c.code + '</span>' +
    '<span class="name">' + esc(c.name) + '</span><span class="val">' + esc(fmt(conv(1, c.code, base))) + " " + esc(base) + "</span></button>").join("");

  const s = data.source, st = $("status"), note = $("note");
  st.className = "status " + s;
  if (s === "live") { st.textContent = "Актуальные курсы · " + data.date; note.textContent = "Показано, сколько стоит 1 единица валюты в выбранной валюте."; note.className = "note"; }
  else if (s === "cache") { st.textContent = "Старые курсы · " + data.date; note.textContent = "Не удалось загрузить новые курсы — использованы последние сохранённые."; note.className = "note warn"; }
  else { st.textContent = "Средние курсы"; note.textContent = "Не удалось загрузить свежие курсы — использованы ориентировочные средние (" + data.date + "). Реальный курс может отличаться."; note.className = "note warn"; }
}

fillSelect($("from"), "RUB"); fillSelect($("to"), "EUR"); fillSelect($("base"), "RUB");
["amount", "from", "to", "base"].forEach(id => $(id).addEventListener("input", draw));
$("swap").addEventListener("click", () => { const f = $("from").value; $("from").value = $("to").value; $("to").value = f; draw(); });
$("grid").addEventListener("click", e => {          // клик по карточке: «из этой валюты в базовую»
  const b = e.target.closest(".rate"); if (!b) return;
  $("from").value = b.dataset.code; $("to").value = $("base").value; $("amount").value = 1; draw();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
draw();
loadRates().then(d => { data = d; draw(); });
