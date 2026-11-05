/* =========================================================================
   ★★★  ГЛАВНЫЙ ФАЙЛ КОНТЕНТА  ★★★
   Здесь лежит ВЕСЬ текст сайта. Правь только этот файл — страницы
   подтянут изменения сами. HTML трогать почти не придётся.

   КАК ПОЛЬЗОВАТЬСЯ:
   - Всё, что помечено  // ЗАМЕНИТЬ  или  «[ПЛЕЙСХОЛДЕР]»  — это заглушка.
   - Тексты на сайте — на чешском. Комментарии (после //) — для нас, на сайте не видны.
   - Чтобы ДОБАВИТЬ собаку/помёт/новость — скопируй один блок { ... } и вставь рядом.
   - Порядок в массиве = порядок на странице (новости идут сверху вниз).

   ОГЛАВЛЕНИЕ ФАЙЛА:
     1) SITE.kennel      — название, слоган, соцсети, «с какого года»   → Úvod, шапка, подвал
     2) SITE.uvod        — тексты главной страницы                       → index.html
     3) SITE.novinky[]   — лента новостей                                → novinky.html
     4) SITE.dogs[]      — наши собаки (карточки)                        → nasi-basenji.html, pes.html
     5) SITE.litters[]   — помёты                                        → nas-chov.html
     6) SITE.gallery[]   — фотогалерея (альбомы)                         → fotogalerie.html
     7) SITE.odkazy[]    — ссылки                                        → odkazy.html
     8) SITE.kontakty    — контакты                                      → kontakty.html
   ========================================================================= */

const SITE = {

  /* ======================================================================
     1) ОБЩЕЕ: НАЗВАНИЕ ПИТОМНИКА, СОЦСЕТИ, ГОД
     Используется в шапке, подвале и на главной.
     ====================================================================== */
  kennel: {
    name: "My Beautiful Savage",                     // ЗАМЕНИТЬ: название CHS
    subtitle: "FCI Basenji kennel v srdci Evropy",   // подпись под названием
    sinceYear: "2016",                               // ЗАМЕНИТЬ: год основания
    instagram: {
      handle: "@nurunyota_basenji",                  // ЗАМЕНИТЬ
      url: "https://instagram.com/nurunyota_basenji" // ЗАМЕНИТЬ: ссылка на IG
    }
  },

  /* ======================================================================
     2) ГЛАВНАЯ (ÚVOD) — index.html
     Личные, тёплые тексты. Не рекламные.
     ====================================================================== */
  uvod: {
    // Абзац «Почему и когда возникла CHS» (3–4 предложения от первого лица)
    prochVznikla: {
      title: "Proč a kdy naše CHS vznikla?",
      text: "Naše malá rodinná chovatelská stanice vznikla v roce 2016 z čisté lásky " +
            "k této výjimečné konžské plemenné rase. Všechno začalo naší první fenkou, " +
            "která nám naprosto změnila život a ukázala, jaké to je sdílet domov s basenji. " +
            "Nechováme ve velkém — štěňátka se rodí u nás doma, mezi dětmi a hrnky kávy, " +
            "a každé z nich odchází do rodiny, kterou si sami vybíráme srdcem."
    },
    // Абзац про название (суахили-слово + перевод + почему выбрали)
    jmeno: {
      title: "Jméno „My Beautiful Savage“",  // ЗАМЕНИТЬ название в заголовке
      text: "Název jsme si vypůjčili ze svahilštiny — jazyka, který basenji provází " +
            "z jejich domoviny. „Nuru“ znamená světlo či záře a „Nyota“ znamená hvězda. " +
            "Dohromady tedy „hvězdná záře“. Vybrali jsme ho, protože naše první fenka " +
            "měla na hrudi malou bílou lysinku ve tvaru hvězdy — a protože tihle pejsci " +
            "nám doslova rozzářili celý dům. ⭐"
    }
  },

  /* ======================================================================
     2b) O NÁS — o-nas.html
     Личная страница о семье/питомнике. Тёплый тон, первое лицо.
     Абзацы можно добавлять/удалять — это просто массив строк.
     ====================================================================== */
  oNas: {
    title: "O nás",
    lead: "Kdo se skrývá za naší chovatelskou stanicí.",
    paragraphs: [
      "Jsme malá rodina, pro kterou se basenji stali součástí života. Bydlíme " +
        "na okraji města, kde mají naši pejsci dost prostoru k běhání a my klid " +
        "na to, věnovat se jim naplno.",
      "K plemeni nás přivedla naše první fenka — a od té chvíle už pro nás jiný " +
        "pes nepřipadal v úvahu. Fascinuje nás jejich hrdá povaha, čistotnost " +
        "a to, jak jsou k rodině oddaní.",
      "Nechováme ve velkém. Vrhy plánujeme jen občas a pečlivě — s důrazem na " +
        "zdraví, povahu a typické znaky plemene. Všechna štěňátka vyrůstají u nás " +
        "doma, obklopená lidmi i běžným domácím ruchem, aby byla dobře " +
        "socializovaná.",
      "Do nových rodin dáváme štěňátka jen tam, kde víme, že se budou mít dobře. " +
        "Rádi zůstáváme s majiteli našich odchovů v kontaktu i po letech. ❣️"
    ]
  },

  /* ======================================================================
     5b) O PLEMENI — o-plemeni.html
     Инфо о породе басенджи. Каждый блок = { title, text }.
     ====================================================================== */
  oPlemeni: {
    title: "O plemeni",
    lead: "Basenji — starobylý „neštěkající“ pes z Afriky.",
    sections: [
      {
        title: "Původ",
        text: "Basenji patří mezi nejstarší plemena psů na světě. Pochází ze střední " +
              "Afriky, z oblasti dnešního Konga, kde původní obyvatelé využívali tyto " +
              "hbité psy k lovu. Do Evropy se dostali až ve 20. století."
      },
      {
        title: "Povaha",
        text: "Je to inteligentní, hrdý a nezávislý pes s velmi osobitým charakterem. " +
              "Na svého člověka je silně vázaný, k cizím lidem bývá zdrženlivý. " +
              "Basenji si udržuje čistotu podobně jako kočka — sám se olizuje a nemá " +
              "typický psí pach."
      },
      {
        title: "„Neštěkající“ pes",
        text: "Basenji neumí štěkat v běžném slova smyslu. Místo toho vydává typické " +
              "zvuky — jakési „jódlování“ (baroo), když má radost. To ale neznamená, " +
              "že je tichý za všech okolností. :)"
      },
      {
        title: "Pohyb a coursing",
        text: "Je to temperamentní a velmi rychlý pes, který potřebuje dostatek pohybu. " +
              "Mnozí basenji milují coursing — hon za návnadou — kde mohou naplno " +
              "využít svůj běžecký talent."
      },
      {
        title: "Zdraví",
        text: "U plemene se sleduje především Fanconiho syndrom a dědičná oční vada " +
              "PRA (BJ1). Proto své chovné psy DNA testujeme, aby štěňátka byla " +
              "zdravá. Při výběru chovatele se vždy ptejte na výsledky testů rodičů."
      },
      {
        title: "Je basenji pro vás?",
        text: "Basenji není pes pro každého. Vyžaduje důslednost, pochopení pro svou " +
              "nezávislost a majitele, kterého baví aktivní život. Odměnou je vám " +
              "věrný a jedinečný společník."
      }
    ]
  },

  /* ======================================================================
     3) NOVINKY — novinky.html
     Короткие личные посты, реверс-хронология (новые сверху).
     Чтобы добавить пост — скопируй один { } блок наверх списка.
     ====================================================================== */
  novinky: [
    {
      date: "12. 6. 2026",                                   // ЗАМЕНИТЬ дату
      title: "Kylienka má dneska 4. narozeniny! 🎂",
      text: "Naše zlatíčko Kylienka dnes slaví čtvrté narozeniny… Kde ten čas letí?! " +
            "Přejeme jí hlavně zdravíčko a spoustu psích dobrot. ❣️",
      photo: true                                            // true = показать заглушку фото
    },
    {
      date: "28. 5. 2026",
      title: "Coursingová licence pro Avušku ⚡️",
      text: "S obrovskou radostí hlásíme — Avuška úspěšně složila coursingové zkoušky " +
            "a získala licenci! Běhá jako blesk a je to na ni radost koukat. :)",
      photo: true
    },
    {
      date: "3. 5. 2026",
      title: "Víkendový coursingový kemp",
      text: "Vyrazili jsme na jarní coursingové soustředění. Tři dny plné běhání, " +
            "nových kamarádů a večerního povídání u ohně. Pejsci spali jako zabití… a my taky.",
      photo: false
    },
    {
      date: "15. 4. 2026",
      title: "Klubová výstava — krásné umístění",
      text: "Z klubové výstavy si vezeme moc pěkné hodnocení a stužky. Děkujeme rozhodčí " +
            "za milá slova o našich pejscích!",
      photo: true
    },
    {
      date: "20. 2. 2026",
      title: "Štěňátka z vrhu „A“ slaví 1. narozeniny 🎉",
      text: "Nedá se tomu uvěřit — našim dráčatům z vrhu „A“ je už celý rok! Sledovat, " +
            "jak z nich vyrostli takoví krasavci, je ta nejhezčí odměna.",
      photo: true
    },
    {
      date: "5. 1. 2026",
      title: "Nový přírůstek dorazil domů <3",
      text: "Přivítali jsme v rodině nové štěňátko. První noc byla dlouhá, ale ta pusinka " +
            "za to stojí. Časem vám ho představíme víc!",
      photo: true
    },
    {
      date: "18. 11. 2025",
      title: "Podzimní coursingový závod",
      text: "Účast, radost z běhu a jedno moc pěkné umístění. O výsledek nejde vždycky " +
            "na prvním místě — hlavně že si pejsci závod užili. ;)",
      photo: false
    },
    {
      date: "2. 9. 2025",
      title: "Začátek nové sezóny",
      text: "Léto uteklo a my se pomalu chystáme na podzimní výstavy a coursingy. " +
            "Držte nám palce!",
      photo: false
    }
  ],

  /* ======================================================================
     4) NAŠI BASENJI — nasi-basenji.html (список) + pes.html (карточка)
     Каждая собака = один блок { }. "slug" — адрес карточки (латиницей,
     без пробелов), он же в ссылке pes.html?pes=SLUG. Должен быть уникальным.
     Чтобы добавить собаку — скопируй блок и поменяй slug + данные.
     ====================================================================== */
  dogs: [
    {
      slug: "avuska",                                        // уникальный id (латиница)
      fullName: "Amara Nuru Nyota",                          // полное племенное имя
      callName: "Avuška",                                    // кличка «в кавычках»
      sex: "fena",                                           // "pes" / "fena"
      sire: "Multi Ch. Zawadi Simba wa Kongo",               // отец (с титулами)
      dam:  "Ch. Neema Nuru Nyota",                          // мать (с титулами)
      dob:  "15. 2. 2022",                                   // дата рождения
      fanconi: "clear",                                      // "clear" / "carrier"
      pra:     "clear",                                      // DNA PRA BJ1: "clear" / "carrier"
      teeth:   "plný chrup, nůžkový skus",                   // зубы
      results: [                                             // выставки / coursing
        "Klubová výstava 2024: BOJ (nejlepší mladý)",
        "MVP Praha 2024: CAJC, BOS",
        "FCI CACIB-J — Brno 2024",
        "Coursing: složená licence ⚡️"
      ]
    },
    {
      slug: "kylienka",
      fullName: "Kito wa Nuru Nyota",
      callName: "Kylienka",
      sex: "fena",
      sire: "Int. Ch. Baraka Moyo",
      dam:  "Amara Nuru Nyota „Avuška“",
      dob:  "12. 6. 2022",
      fanconi: "clear",
      pra:     "clear",
      teeth:   "plný chrup, nůžkový skus",
      results: [
        "Klubová výstava — mladý vítěz",
        "CAC — národní výstava 2025",
        "Coursing: pravidelná účast"
      ]
    },
    {
      slug: "zuzu",
      fullName: "Zuri Nuru Nyota",
      callName: "Zuzu",
      sex: "pes",
      sire: "Multi Ch. Zawadi Simba wa Kongo",
      dam:  "Ch. Neema Nuru Nyota",
      dob:  "3. 8. 2023",
      fanconi: "clear",
      pra:     "carrier",
      teeth:   "plný chrup, nůžkový skus",
      results: [
        "Klubová výstava 2025: CAJC",
        "MVP — velmi nadějný",
        "Coursing: první starty"
      ]
    }
  ],

  /* ======================================================================
     5) NÁŠ CHOV — nas-chov.html
     Каждый помёт = один блок { }. Внутри "puppies" — по щенку на блок.
     "weights" — вес по неделям (порядок = порядок строк в таблице).
     Числа реалистично растущие. Единицы пиши прямо в значении ("230 g").
     ====================================================================== */
  litters: [
    {
      letter: "A",                                           // буква помёта
      title: "VRH „A“",
      date:  "15. 2. 2022",                                  // дата рождения помёта
      intro: "Narodilo se nám 5 zdravých štěňátek — 3 holčičky a 2 kluci :)",
      puppies: [
        {
          name: "Amara Nuru Nyota",                          // полное имя
          nick: "Avuška",                                    // домашнее прозвище
          collar: "červený obojek",                          // цвет ошейника
          bornAt: "04:12",                                   // время рождения
          weights: {                                         // вес по неделям
            "Porodní":   "235 g",
            "1. týden":  "390 g",
            "2. týden":  "560 g",
            "3. týden":  "760 g",
            "4. týden":  "1010 g",
            "5. týden":  "1290 g",
            "6. týden":  "1580 g",
            "7. týden":  "1900 g",
            "8. týden":  "2250 g"
          }
        },
        {
          name: "Ayo Nuru Nyota",
          nick: "Ája",
          collar: "růžový obojek",
          bornAt: "05:03",
          weights: {
            "Porodní":   "218 g",
            "1. týden":  "365 g",
            "2. týden":  "540 g",
            "3. týden":  "735 g",
            "4. týden":  "980 g",
            "5. týden":  "1250 g",
            "6. týden":  "1540 g",
            "7. týden":  "1850 g",
            "8. týden":  "2180 g"
          }
        },
        {
          name: "Asha Nuru Nyota",
          nick: "Ašička",
          collar: "žlutý obojek",
          bornAt: "05:41",
          weights: {
            "Porodní":   "242 g",
            "1. týden":  "400 g",
            "2. týden":  "585 g",
            "3. týden":  "790 g",
            "4. týden":  "1040 g",
            "5. týden":  "1320 g",
            "6. týden":  "1610 g",
            "7. týden":  "1930 g",
            "8. týden":  "2300 g"
          }
        },
        {
          name: "Aziz Nuru Nyota",
          nick: "Ázík",
          collar: "modrý obojek",
          bornAt: "06:15",
          weights: {
            "Porodní":   "255 g",
            "1. týden":  "420 g",
            "2. týden":  "615 g",
            "3. týden":  "830 g",
            "4. týden":  "1090 g",
            "5. týden":  "1380 g",
            "6. týden":  "1690 g",
            "7. týden":  "2020 g",
            "8. týden":  "2420 g"
          }
        },
        {
          name: "Amani Nuru Nyota",
          nick: "Ámík",
          collar: "zelený obojek",
          bornAt: "06:48",
          weights: {
            "Porodní":   "248 g",
            "1. týden":  "410 g",
            "2. týden":  "600 g",
            "3. týden":  "810 g",
            "4. týden":  "1060 g",
            "5. týden":  "1350 g",
            "6. týden":  "1650 g",
            "7. týden":  "1980 g",
            "8. týden":  "2360 g"
          }
        }
      ],
      // Родители помёта
      parents: {
        sire: "Multi Ch. Zawadi Simba wa Kongo „Simba“",
        dam:  "Ch. Neema Nuru Nyota „Neema“"
      }
    }
  ],

  /* ======================================================================
     6) FOTOGALERIE — fotogalerie.html
     Альбомы. count = сколько заглушек-фото показать в альбоме.
     ====================================================================== */
  gallery: [
    { album: "Výstavy",  count: 6 },
    { album: "Štěňátka", count: 6 },
    { album: "Coursing", count: 6 },
    { album: "Naše všední dny", count: 6 }
  ],

  /* ======================================================================
     7) ODKAZY — odkazy.html
     Просто текстовые ссылки. note — короткая подпись (можно оставить пустой "").
     ====================================================================== */
  odkazy: [
    { name: "Basenji klub Bohemia",      url: "https://bkb.basenji.info", note: "klub plemene basenji v ČR" },
    { name: "ČMKU",                      url: "https://www.cmku.cz",       note: "Českomoravská kynologická unie" },
    { name: "FCI",                       url: "https://www.fci.be",        note: "Mezinárodní kynologická federace" },
    { name: "Chovatelská stanice XY",    url: "#", note: "spřátelený chov (ZAMĚNIT odkaz)" },       // ЗАМЕНИТЬ
    { name: "Chovatelská stanice YZ",    url: "#", note: "spřátelený chov (ZAMĚNIT odkaz)" }        // ЗАМЕНИТЬ
  ],

  /* ======================================================================
     8) KONTAKTY — kontakty.html  (без формы обратной связи!)
     ====================================================================== */
  kontakty: {
    person:   "[JMÉNO A PŘÍJMENÍ]",          // ЗАМЕНИТЬ: имя владельца
    city:     "Brno, Česká republika",        // ЗАМЕНИТЬ: город
    phone:    "+420 XXX XXX XXX",             // ЗАМЕНИТЬ: телефон
    email:    "info@nurunyota.cz",            // ЗАМЕНИТЬ: e-mail
    // Ссылка на встраиваемую карту (Google Maps → Sdílet → Vložit mapu → src="...").
    // Оставь "" — тогда покажется аккуратная заглушка вместо карты.
    mapEmbedUrl: ""
  }
};
