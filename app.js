/* =========================================================================
   app.js — общая логика сайта
   - рисует шапку с меню (гамбургер на мобильном) и подвал
   - содержит функции отрисовки каждой страницы из данных SITE (data.js)
   Текст сайта менять НЕ здесь, а в data.js. Здесь — только вёрстка блоков.
   ========================================================================= */

/* --- пункты меню (порядок = порядок в шапке). Правь тут, если меняешь навигацию --- */
const NAV = [
  { label: "Úvod",         href: "index.html",        key: "uvod" },
  { label: "O nás",        href: "o-nas.html",        key: "onas" },
  { label: "Novinky",      href: "novinky.html",      key: "novinky" },
  { label: "Naši Basenji", href: "nasi-basenji.html", key: "dogs" },
  { label: "Náš chov",     href: "nas-chov.html",     key: "chov" },
  { label: "O plemeni",    href: "o-plemeni.html",    key: "plemeni" },
  { label: "Fotogalerie",  href: "fotogalerie.html",  key: "galerie" },
  { label: "Odkazy",       href: "odkazy.html",       key: "odkazy" },
  { label: "Kontakty",     href: "kontakty.html",     key: "kontakty" }
];

/* мелкий помощник: экранирование текста */
function esc(s) {
  return String(s).replace(/[&<>"']/g, m => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]
  ));
}

/* заглушка фото */
function photoBox(caption) {
  return '<div class="photo">' + esc(caption || "Foto bude doplněno") + '</div>';
}

/* -------------------------------------------------------------------------
   ШАПКА + ПОДВАЛ — вставляются на каждой странице.
   activeKey — какой пункт меню подсветить.
   ------------------------------------------------------------------------- */
function renderChrome(activeKey) {
  const k = SITE.kennel;

  const navLinks = NAV.map(n =>
    '<li><a href="' + n.href + '"' +
    (n.key === activeKey ? ' class="active"' : '') +
    '>' + esc(n.label) + '</a></li>'
  ).join("");

  const header =
    '<header class="site-header"><div class="wrap">' +
      '<a class="brand" href="index.html">' + esc(k.name) +
        '<small>' + esc(k.subtitle) + '</small>' +
      '</a>' +
      '<button class="nav-toggle" aria-label="Menu" aria-expanded="false">' +
        '<span></span></button>' +
      '<nav class="site-nav"><ul>' + navLinks + '</ul></nav>' +
    '</div></header>';

  const footer =
    '<footer class="site-footer"><div class="wrap">' +
      esc(k.name) + ' — chovatelská stanice basenji · since ' + esc(k.sinceYear) + '<br>' +
      '<a href="' + esc(k.instagram.url) + '" target="_blank" rel="noopener">Instagram ' +
        esc(k.instagram.handle) + '</a>' +
    '</div></footer>';

  const headerHost = document.getElementById("site-header");
  const footerHost = document.getElementById("site-footer");
  if (headerHost) headerHost.innerHTML = header;
  if (footerHost) footerHost.innerHTML = footer;

  // гамбургер
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  document.title = document.title || k.name;
  document.body.setAttribute("data-page", activeKey || "");
}

/* -------------------------------------------------------------------------
   1) ÚVOD
   ------------------------------------------------------------------------- */
function renderUvod(host) {
  const k = SITE.kennel, u = SITE.uvod;
  host.innerHTML =
    '<section class="hero">' +
      '<h1 class="kennel">' + esc(k.name) + '</h1>' +
      '<div class="kennel-sub">' + esc(k.subtitle) + '</div>' +
    '</section>' +
    '<div style="max-width:420px;margin:24px auto;">' + photoBox("Foto bude doplněno") + '</div>' +
    '<h2>' + esc(u.prochVznikla.title) + '</h2><p>' + esc(u.prochVznikla.text) + '</p>' +
    '<h2>' + esc(u.jmeno.title) + '</h2><p>' + esc(u.jmeno.text) + '</p>' +
    '<div class="ig-callout">' +
      'Nejvíc ze života našich pejsků najdete na Instagramu 📸<br>' +
      '<a class="ig-handle" href="' + esc(k.instagram.url) + '" target="_blank" rel="noopener">' +
        esc(k.instagram.handle) + '</a>' +
    '</div>' +
    '<p style="text-align:center;color:var(--muted);font-size:.9rem;">since ' + esc(k.sinceYear) + '</p>';
}

/* -------------------------------------------------------------------------
   O NÁS
   ------------------------------------------------------------------------- */
function renderONas(host) {
  const o = SITE.oNas;
  const paras = o.paragraphs.map(t => '<p>' + esc(t) + '</p>').join("");
  host.innerHTML =
    '<h1 class="page-title">' + esc(o.title) + '</h1>' +
    '<p class="lead">' + esc(o.lead) + '</p>' +
    '<div style="max-width:420px;margin:18px 0 26px;">' + photoBox("Foto bude doplněno") + '</div>' +
    paras;
}

/* -------------------------------------------------------------------------
   O PLEMENI
   ------------------------------------------------------------------------- */
function renderOPlemeni(host) {
  const o = SITE.oPlemeni;
  const sections = o.sections.map(s =>
    '<h2>' + esc(s.title) + '</h2><p>' + esc(s.text) + '</p>'
  ).join("");
  host.innerHTML =
    '<h1 class="page-title">' + esc(o.title) + '</h1>' +
    '<p class="lead">' + esc(o.lead) + '</p>' +
    sections;
}

/* -------------------------------------------------------------------------
   2) NOVINKY
   ------------------------------------------------------------------------- */
function renderNovinky(host) {
  const items = SITE.novinky.map(n =>
    '<article class="news-item">' +
      '<div class="date">' + esc(n.date) + '</div>' +
      '<h3>' + esc(n.title) + '</h3>' +
      '<p>' + esc(n.text) + '</p>' +
      (n.photo ? photoBox("Foto bude doplněno") : '') +
    '</article>'
  ).join("");
  host.innerHTML =
    '<h1 class="page-title">Novinky</h1>' +
    '<p class="lead">Co je u nás nového…</p>' + items;
}

/* -------------------------------------------------------------------------
   3a) NAŠI BASENJI — список
   ------------------------------------------------------------------------- */
function renderDogList(host) {
  const cards = SITE.dogs.map(d =>
    '<a class="dog-card" href="pes.html?pes=' + encodeURIComponent(d.slug) + '">' +
      photoBox("Foto bude doplněno") +
      '<div class="dog-card-body">' +
        '<span class="dog-name">' + esc(d.fullName) + '</span> ' +
        '<span class="dog-call">„' + esc(d.callName) + '“</span>' +
        '<div class="dog-meta">' + esc(d.sex) + ' · nar. ' + esc(d.dob) + '</div>' +
      '</div>' +
    '</a>'
  ).join("");
  host.innerHTML =
    '<h1 class="page-title">Naši Basenji</h1>' +
    '<p class="lead">Klikněte na pejska pro podrobnosti.</p>' +
    '<div class="dog-grid">' + cards + '</div>';
}

/* -------------------------------------------------------------------------
   3b) NAŠI BASENJI — карточка одной собаки (pes.html?pes=slug)
   ------------------------------------------------------------------------- */
function renderDogDetail(host) {
  const slug = new URLSearchParams(location.search).get("pes");
  const d = SITE.dogs.find(x => x.slug === slug);

  if (!d) {
    host.innerHTML =
      '<p><a class="back-link" href="nasi-basenji.html">← Zpět na Naši Basenji</a></p>' +
      '<h1>Pejsek nenalezen</h1><p>Zkuste se vrátit na seznam.</p>';
    return;
  }
  document.title = d.callName + " — " + SITE.kennel.name;

  const health = (label, val) =>
    '<div><dt>' + esc(label) + '</dt><dd>' +
      '<span class="badge ' + (val === "carrier" ? "carrier" : "") + '">' +
      esc(val) + '</span></dd></div>';

  const results = d.results.map(r => '<li>' + esc(r) + '</li>').join("");

  host.innerHTML =
    '<p><a class="back-link" href="nasi-basenji.html">← Zpět na Naši Basenji</a></p>' +
    '<h1 class="page-title">' + esc(d.fullName) + ' <span class="dog-call">„' + esc(d.callName) + '“</span></h1>' +
    '<div class="dog-photos">' + photoBox("Foto 1 bude doplněno") + photoBox("Foto 2 bude doplněno") + '</div>' +
    '<dl class="data-list">' +
      '<div><dt>Sire (otec):</dt><dd>' + esc(d.sire) + '</dd></div>' +
      '<div><dt>Dam (matka):</dt><dd>' + esc(d.dam) + '</dd></div>' +
      '<div><dt>Date of birth:</dt><dd>' + esc(d.dob) + '</dd></div>' +
      health("Fanconi Syndrome:", d.fanconi) +
      health("DNA PRA BJ1:", d.pra) +
      '<div><dt>Teeth:</dt><dd>' + esc(d.teeth) + '</dd></div>' +
    '</dl>' +
    '<h2>Výstavy &amp; Coursing — Úspěch</h2>' +
    '<ul class="results-list">' + results + '</ul>';
}

/* -------------------------------------------------------------------------
   4) NÁŠ CHOV — помёты
   ------------------------------------------------------------------------- */
function renderChov(host) {
  const litters = SITE.litters.map(l => {
    const puppies = l.puppies.map(p => {
      const rows = Object.keys(p.weights).map(w =>
        '<tr><th>' + esc(w) + '</th><td>' + esc(p.weights[w]) + '</td></tr>'
      ).join("");
      return (
        '<div class="puppy">' +
          '<div class="puppy-top">' +
            '<span class="pup-name">' + esc(p.name) + '</span>' +
            '<span class="pup-nick">„' + esc(p.nick) + '“</span>' +
          '</div>' +
          '<div class="pup-mini">Barva obojku: ' + esc(p.collar) +
            ' · Čas narození: ' + esc(p.bornAt) + '</div>' +
          '<table class="weights"><thead><tr><th>Váha</th><th>Hodnota</th></tr></thead>' +
          '<tbody>' + rows + '</tbody></table>' +
        '</div>'
      );
    }).join("");

    return (
      '<section class="litter">' +
        '<div class="litter-head">' +
          '<h2>' + esc(l.title) + '</h2>' +
          '<div class="litter-date">' + esc(l.date) + '</div>' +
          '<p>' + esc(l.intro) + '</p>' +
        '</div>' +
        puppies +
        '<div class="parents-box">' +
          '<b>RODIČE</b><br>' +
          'Sire: ' + esc(l.parents.sire) + '<br>' +
          'Dam: ' + esc(l.parents.dam) +
        '</div>' +
      '</section>'
    );
  }).join("");

  host.innerHTML =
    '<h1 class="page-title">Náš chov</h1>' +
    '<p class="lead">Naše vrhy — den po dni, gram po gramu.</p>' + litters;
}

/* -------------------------------------------------------------------------
   5) FOTOGALERIE
   ------------------------------------------------------------------------- */
function renderGallery(host) {
  const albums = SITE.gallery.map(a => {
    let boxes = "";
    for (let i = 0; i < a.count; i++) boxes += photoBox("Foto bude doplněno");
    return (
      '<div class="gallery-album">' +
        '<h2>' + esc(a.album) + '</h2>' +
        '<div class="gallery-grid">' + boxes + '</div>' +
      '</div>'
    );
  }).join("");
  host.innerHTML = '<h1 class="page-title">Fotogalerie</h1>' + albums;
}

/* -------------------------------------------------------------------------
   6) ODKAZY
   ------------------------------------------------------------------------- */
function renderOdkazy(host) {
  const items = SITE.odkazy.map(o =>
    '<li><a href="' + esc(o.url) + '" target="_blank" rel="noopener">' + esc(o.name) + '</a>' +
      (o.note ? ' <span class="link-note">— ' + esc(o.note) + '</span>' : '') +
    '</li>'
  ).join("");
  host.innerHTML =
    '<h1 class="page-title">Odkazy</h1>' +
    '<p class="lead">Klub plemene, kynologické organizace a spřátelené chovy.</p>' +
    '<ul class="links-list">' + items + '</ul>';
}

/* -------------------------------------------------------------------------
   7) KONTAKTY
   ------------------------------------------------------------------------- */
function renderKontakty(host) {
  const c = SITE.kontakty, k = SITE.kennel;
  const map = c.mapEmbedUrl
    ? '<div class="map-embed"><iframe src="' + esc(c.mapEmbedUrl) +
      '" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>'
    : '<div class="map-embed"><div class="photo" style="width:100%;height:100%;aspect-ratio:auto;border:none;">' +
      'Mapa bude doplněna</div></div>';

  host.innerHTML =
    '<h1 class="page-title">Kontakty</h1>' +
    '<div class="contact-block">' +
      '<div><span class="label">Chovatel:</span> ' + esc(c.person) + '</div>' +
      '<div><span class="label">Místo:</span> ' + esc(c.city) + '</div>' +
      '<div><span class="label">Telefon:</span> <a href="tel:' + esc(c.phone.replace(/\s/g, "")) + '">' + esc(c.phone) + '</a></div>' +
      '<div><span class="label">E-mail:</span> <a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a></div>' +
      '<div><span class="label">Instagram:</span> 📸 <a href="' + esc(k.instagram.url) + '" target="_blank" rel="noopener">' + esc(k.instagram.handle) + '</a></div>' +
    '</div>' + map;
}
