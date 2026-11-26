// Общие функции: язык, шапка, подвал, форматирование, безопасный вывод.
(function () {
  "use strict";

  var STRINGS = {
    kaa: {
      nav_home: "Bas bet", nav_about: "Mektep haqqında", nav_news: "Jańalıqlar",
      nav_teachers: "Muǵallimler", nav_schedule: "Sabaq kestesi", nav_admission: "Qabıllaw",
      nav_contacts: "Baylanıs", menu: "Menyu",
      hero_news: "Sońǵı jańalıqlar", hero_admission: "1-klassqa qabıllaw",
      latest_news: "Sońǵı jańalıqlar", all_news: "Barlıq jańalıqlar",
      about_title: "Mektep haqqında", director: "Basshılıq",
      teachers_title: "Bizdiń muǵallimler", schedule_title: "Qońıraw kestesi",
      lesson: "sabaq", admission_title: "1-klassqa qabıllaw", contacts_title: "Baylanıs",
      address: "Mánzil", phone: "Telefon", email: "E-pochta", work_hours: "Jumıs waqtı",
      read_more: "Tolıǵıraq", back_to_news: "Jańalıqlarǵa qaytıw",
      load_more: "Jáne kórsetiw", no_news: "Házirshe jańalıqlar joq.",
      loading: "Júklenbekte…", load_error: "Jańalıqlardı júklew múmkin bolmadı. Keyinirek qaytalap kóriń.",
      not_found: "Bul jańalıq tabılmadı yamasa óshirilgen.",
      cat_all: "Barlıǵı", cat_news: "Jańalıq", cat_event: "Ilaje",
      cat_announcement: "Daǵaza", cat_achievement: "Jetiskenlik",
      demo_banner: "Demo rejim: Supabase ele qosılmaǵan, úlgi jańalıqlar kórsetilmekte.",
      rights: "Barlıq huqıqlar qorǵalǵan.", admin_link: "Basqarıw",
      share: "Bólisiw", copied: "Silteme kóshirildi",
      quotes_title: "Prezident sózleri", source: "Derek", gallery_title: "Mektep súwretlerde", close: "Jabıw"
    },
    uz: {
      nav_home: "Bosh sahifa", nav_about: "Maktab haqida", nav_news: "Yangiliklar",
      nav_teachers: "O'qituvchilar", nav_schedule: "Dars jadvali", nav_admission: "Qabul",
      nav_contacts: "Aloqa", menu: "Menyu",
      hero_news: "So'nggi yangiliklar", hero_admission: "1-sinfga qabul",
      latest_news: "So'nggi yangiliklar", all_news: "Barcha yangiliklar",
      about_title: "Maktab haqida", director: "Rahbariyat",
      teachers_title: "Bizning o'qituvchilar", schedule_title: "Qo'ng'iroqlar jadvali",
      lesson: "dars", admission_title: "1-sinfga qabul", contacts_title: "Aloqa",
      address: "Manzil", phone: "Telefon", email: "E-pochta", work_hours: "Ish vaqti",
      read_more: "Batafsil", back_to_news: "Yangiliklarga qaytish",
      load_more: "Yana ko'rsatish", no_news: "Hozircha yangiliklar yo'q.",
      loading: "Yuklanmoqda…", load_error: "Yangiliklarni yuklab bo'lmadi. Keyinroq urinib ko'ring.",
      not_found: "Bu yangilik topilmadi yoki o'chirilgan.",
      cat_all: "Hammasi", cat_news: "Yangilik", cat_event: "Tadbir",
      cat_announcement: "E'lon", cat_achievement: "Yutuq",
      demo_banner: "Demo rejim: Supabase hali ulanmagan, namunaviy yangiliklar ko'rsatilmoqda.",
      rights: "Barcha huquqlar himoyalangan.", admin_link: "Boshqaruv",
      share: "Ulashish", copied: "Havola nusxalandi",
      quotes_title: "Prezident so'zlari", source: "Manba", gallery_title: "Maktab suratlarda", close: "Yopish"
    },
    en: {
      nav_home: "Home", nav_about: "About", nav_news: "News",
      nav_teachers: "Teachers", nav_schedule: "Schedule", nav_admission: "Admission",
      nav_contacts: "Contacts", menu: "Menu",
      hero_news: "Latest news", hero_admission: "Grade 1 admission",
      latest_news: "Latest news", all_news: "All news",
      about_title: "About the school", director: "Leadership",
      teachers_title: "Our teachers", schedule_title: "Bell schedule",
      lesson: "lesson", admission_title: "Grade 1 admission", contacts_title: "Contacts",
      address: "Address", phone: "Phone", email: "Email", work_hours: "Office hours",
      read_more: "Read more", back_to_news: "Back to news",
      load_more: "Show more", no_news: "No news yet.",
      loading: "Loading…", load_error: "Could not load the news. Please try again later.",
      not_found: "This news item was not found or has been removed.",
      cat_all: "All", cat_news: "News", cat_event: "Event",
      cat_announcement: "Announcement", cat_achievement: "Achievement",
      demo_banner: "Demo mode: Supabase is not connected yet, sample news are shown.",
      rights: "All rights reserved.", admin_link: "Admin",
      share: "Share", copied: "Link copied",
      quotes_title: "Words of the President", source: "Source", gallery_title: "School in photos", close: "Close"
    }
  };
  var LANGS = ["kaa", "uz", "en"];
  var LANG_LABELS = { kaa: "QQ", uz: "UZ", en: "EN" };

  var CATEGORIES = ["news", "event", "announcement", "achievement"];

  function storageGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function storageSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  function getLang() {
    var fromUrl = new URLSearchParams(location.search).get("lang");
    var l = fromUrl || storageGet("site_lang") || "kaa";
    return STRINGS[l] ? l : "kaa";
  }
  var lang = getLang();

  function t(key) { return (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.kaa[key] || key; }
  function L(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] || obj.kaa || obj.uz || "";
  }
  function setLang(l) { storageSet("site_lang", l); lang = l; location.reload(); }

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  // Только http(s) ссылки, иначе пусто — защита от javascript: и прочего
  function safeUrl(u) {
    if (!u) return "";
    try {
      var url = new URL(u, location.href);
      return (url.protocol === "http:" || url.protocol === "https:") ? url.href : "";
    } catch (e) { return ""; }
  }

  var MONTHS = {
    kaa: ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"],
    uz: ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"],
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  };
  function formatDate(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return "";
    var m = MONTHS[lang][d.getMonth()];
    if (lang === "en") return m + " " + d.getDate() + ", " + d.getFullYear();
    return d.getFullYear() + (lang === "kaa" ? "-jıl " : "-yil ") + d.getDate() + "-" + m;
  }

  // Текст новости → абзацы. Пустая строка = новый абзац.
  function bodyToHtml(text) {
    return String(text || "").trim().split(/\n\s*\n/).map(function (p) {
      return "<p>" + escapeHtml(p).replace(/\n/g, "<br>") + "</p>";
    }).join("");
  }

  function catLabel(c) { return t("cat_" + (CATEGORIES.indexOf(c) >= 0 ? c : "news")); }

  // Карточка новости (используется на главной и в списке)
  function newsCard(n) {
    var img = safeUrl(n.image_url);
    var href = "article.html?id=" + encodeURIComponent(n.id);
    return '<article class="card news-card">' +
      '<a class="news-card__media" href="' + href + '" tabindex="-1" aria-hidden="true">' +
        (img ? '<img src="' + escapeHtml(img) + '" alt="" loading="lazy">'
             : '<span class="news-card__placeholder">42</span>') +
      '</a>' +
      '<div class="news-card__body">' +
        '<div class="meta"><span class="tag tag--' + escapeHtml(n.category || "news") + '">' + escapeHtml(catLabel(n.category)) + '</span>' +
        '<time datetime="' + escapeHtml(n.published_at) + '">' + escapeHtml(formatDate(n.published_at)) + '</time></div>' +
        '<h3><a href="' + href + '">' + escapeHtml(n.title) + '</a></h3>' +
        (n.summary ? '<p>' + escapeHtml(n.summary) + '</p>' : '') +
        '<a class="link-arrow" href="' + href + '">' + escapeHtml(t("read_more")) + ' →</a>' +
      '</div></article>';
  }

  function renderChrome(active) {
    var S = window.SCHOOL;
    var links = [
      ["index.html", "nav_home", "home"],
      ["index.html#about", "nav_about", "about"],
      ["news.html", "nav_news", "news"],
      ["index.html#teachers", "nav_teachers", "teachers"],
      ["index.html#schedule", "nav_schedule", "schedule"],
      ["index.html#admission", "nav_admission", "admission"],
      ["index.html#contacts", "nav_contacts", "contacts"]
    ];
    var nav = links.map(function (l) {
      return '<a href="' + l[0] + '"' + (l[2] === active ? ' aria-current="page"' : '') + '>' + escapeHtml(t(l[1])) + '</a>';
    }).join("");

    var header = document.getElementById("site-header");
    if (header) {
      header.innerHTML =
        '<div class="container header__inner">' +
          '<a class="brand" href="index.html"><span class="brand__mark">42</span>' +
          '<span class="brand__text"><strong>' + escapeHtml(L(S.shortName)) + '</strong><small>' + escapeHtml(L(S.contacts.address)) + '</small></span></a>' +
          '<button class="menu-toggle" aria-expanded="false" aria-controls="main-nav">' + escapeHtml(t("menu")) + '</button>' +
          '<nav id="main-nav" class="nav">' + nav +
            '<span class="lang-switch">' + LANGS.map(function (l) {
              return '<button data-lang="' + l + '"' + (lang === l ? ' aria-pressed="true"' : '') + '>' + LANG_LABELS[l] + '</button>';
            }).join("") +
            '</span>' +
          '</nav>' +
        '</div>';
      header.querySelector(".menu-toggle").addEventListener("click", function () {
        var open = header.classList.toggle("is-open");
        this.setAttribute("aria-expanded", open ? "true" : "false");
      });
      header.querySelectorAll("[data-lang]").forEach(function (b) {
        b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
      });
      header.querySelectorAll(".nav a").forEach(function (a) {
        a.addEventListener("click", function () { header.classList.remove("is-open"); });
      });
    }

    var footer = document.getElementById("site-footer");
    if (footer) {
      var c = S.contacts;
      footer.innerHTML =
        '<div class="container footer__inner">' +
          '<div><div class="brand brand--light"><span class="brand__mark">42</span><span class="brand__text"><strong>' + escapeHtml(L(S.fullName)) + '</strong></span></div></div>' +
          '<div class="footer__col"><span>' + escapeHtml(L(c.address)) + '</span><span>' + escapeHtml(c.phone) + '</span><span>' + escapeHtml(c.email) + '</span></div>' +
          '<div class="footer__col">' +
            (safeUrl(c.telegram) ? '<a href="' + escapeHtml(safeUrl(c.telegram)) + '" target="_blank" rel="noopener">Telegram</a>' : '') +
            (safeUrl(c.instagram) ? '<a href="' + escapeHtml(safeUrl(c.instagram)) + '" target="_blank" rel="noopener">Instagram</a>' : '') +
            '<a href="admin.html" class="muted-link">' + escapeHtml(t("admin_link")) + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="container footer__bottom">© ' + new Date().getFullYear() + ' ' + escapeHtml(L(S.shortName)) + '. ' + escapeHtml(t("rights")) + '</div>';
    }

    document.documentElement.lang = lang === "kaa" ? "kaa" : lang;
    if (window.NewsAPI && window.NewsAPI.isDemo()) {
      var b = document.createElement("div");
      b.className = "demo-banner";
      b.textContent = t("demo_banner");
      document.body.insertBefore(b, document.body.firstChild);
    }
  }

  window.Site = {
    t: t, L: L, lang: function () { return lang; }, escapeHtml: escapeHtml, safeUrl: safeUrl,
    formatDate: formatDate, bodyToHtml: bodyToHtml, catLabel: catLabel, newsCard: newsCard,
    renderChrome: renderChrome, CATEGORIES: CATEGORIES, LANGS: LANGS, LANG_LABELS: LANG_LABELS,
    storageGet: storageGet, storageSet: storageSet, setLang: setLang
  };
})();
