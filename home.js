(function () {
  "use strict";
  var S = window.SCHOOL, Site = window.Site, t = Site.t, L = Site.L, esc = Site.escapeHtml;

  Site.renderChrome("home");
  document.title = L(S.shortName) + " — " + L(S.city);

  // Тексты интерфейса и данные школы
  document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = t(el.getAttribute("data-t")); });
  var fields = { fullName: S.fullName, tagline: S.tagline, about: S.about, admission: S.admission, city: S.city };
  document.querySelectorAll("[data-s]").forEach(function (el) { el.textContent = L(fields[el.getAttribute("data-s")]); });

  document.getElementById("stats").innerHTML = S.stats.map(function (s) {
    return "<li><strong>" + esc(s.value) + "</strong><span>" + esc(L(s.label)) + "</span></li>";
  }).join("");

  // Директор
  var dName = L(S.director.name);
  document.getElementById("director-name").textContent = dName;
  document.getElementById("director-role").textContent = L(S.director.role);
  document.getElementById("director-reception").textContent = L(S.director.reception);
  document.getElementById("director-initials").textContent =
    dName.replace(/\[|\]/g, "").split(/\s+/).slice(0, 2).map(function (w) { return w.charAt(0); }).join("").toUpperCase();

  document.getElementById("teachers-list").innerHTML = S.teachers.map(function (p) {
    var initials = L(p.name).replace(/\[|\]/g, "").split(/\s+/).slice(0, 2).map(function (w) { return w.charAt(0); }).join("").toUpperCase();
    return '<li class="card teacher"><span class="teacher__avatar" aria-hidden="true">' + esc(initials) + '</span>' +
      '<div><strong>' + esc(L(p.name)) + '</strong><span class="muted">' + esc(L(p.subject)) + '</span></div></li>';
  }).join("");

  var shifts = S.shifts || [{ title: "", bells: S.bells || [] }];
  document.getElementById("bells").innerHTML = shifts.map(function (sh) {
    return '<div class="shift">' + (L(sh.title) ? '<h3 class="shift__title">' + esc(L(sh.title)) + "</h3>" : "") +
      '<ol class="bells">' + sh.bells.map(function (b) {
        return '<li><span class="bells__n">' + esc(b.n) + ' ' + esc(t("lesson")) + '</span><span class="bells__time">' + esc(b.time) + '</span></li>';
      }).join("") + "</ol></div>";
  }).join("");

  var adm = Site.safeUrl(S.admissionLink);
  if (adm) {
    document.getElementById("admission").insertAdjacentHTML("beforeend",
      '<a class="btn btn--primary" target="_blank" rel="noopener" href="' + esc(adm) + '">' + esc(adm.replace(/^https?:\/\//, "").replace(/\/$/, "")) + ' →</a>');
  }

  // Контакты
  var c = S.contacts, rows = [
    ["address", L(c.address)], ["phone", c.phone], ["email", c.email], ["work_hours", L(c.workHours)]
  ];
  var html = rows.map(function (r) { return "<dt>" + esc(t(r[0])) + "</dt><dd>" + esc(r[1]) + "</dd>"; }).join("");
  if (Site.safeUrl(c.telegram)) html += '<dt>Telegram</dt><dd><a href="' + esc(Site.safeUrl(c.telegram)) + '" target="_blank" rel="noopener">' + esc(c.telegram.replace(/^https?:\/\//, "")) + "</a></dd>";
  document.getElementById("contact-list").innerHTML = html;
  document.getElementById("map").src = "https://www.google.com/maps?q=" + encodeURIComponent(c.mapQuery || "Nukus") + "&output=embed";

  // Bas bettegi súwret
  var heroImg = document.getElementById("hero-photo");
  if (S.heroPhoto) {
    heroImg.src = S.heroPhoto; heroImg.alt = L(S.fullName); heroImg.hidden = false;
    document.querySelector(".hero__art").classList.add("has-photo");
  }

  // Galereya
  if (S.gallery && S.gallery.length) {
    var gl = document.getElementById("gallery-list");
    gl.innerHTML = S.gallery.map(function (g, i) {
      return '<button class="gallery__item" data-i="' + i + '"><img src="' + esc(g.src) + '" alt="' + esc(L(g.caption)) + '" loading="lazy">' +
        '<span>' + esc(L(g.caption)) + "</span></button>";
    }).join("");
    var lb = document.getElementById("lightbox");
    gl.addEventListener("click", function (e) {
      var b = e.target.closest(".gallery__item"); if (!b) return;
      var g = S.gallery[+b.getAttribute("data-i")];
      document.getElementById("lightbox-img").src = g.src;
      document.getElementById("lightbox-img").alt = L(g.caption);
      document.getElementById("lightbox-cap").textContent = L(g.caption);
      if (lb.showModal) lb.showModal(); else window.open(g.src, "_blank");
    });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
    document.getElementById("gallery").hidden = false;
  }

  // Prezident sózleri
  if (S.quotes && S.quotes.length) {
    document.getElementById("quotes-list").innerHTML = S.quotes.map(function (q) {
      var src = Site.safeUrl(q.source);
      var original = Site.lang() !== "uz" && q.text.uz ? '<span class="quote__orig">' + esc(q.text.uz) + "</span>" : "";
      return '<figure class="quote"><blockquote>«' + esc(L(q.text).replace(/\.$/, "")) + '»</blockquote>' + original +
        '<figcaption>' + (q.date ? esc(q.date) + " · " : "") +
        (src ? '<a href="' + esc(src) + '" target="_blank" rel="noopener">' + esc(t("source")) + ': president.uz</a>' : "") +
        "</figcaption></figure>";
    }).join("");
    document.getElementById("quote-author").textContent = "— " + L(S.quoteAuthor);
    document.getElementById("quotes").hidden = false;
  }

  // Последние новости
  var box = document.getElementById("latest-news");
  box.innerHTML = '<p class="muted">' + esc(t("loading")) + "</p>";
  Promise.resolve(window.NewsAPI.list({ from: 0, to: 2 })).then(function (res) {
    if (res.error) throw res.error;
    var rows = res.data || [];
    box.innerHTML = rows.length ? rows.map(Site.newsCard).join("") : '<p class="muted">' + esc(t("no_news")) + "</p>";
  }).catch(function (e) {
    console.error(e);
    box.innerHTML = '<p class="muted">' + esc(t("load_error")) + "</p>";
  });
})();
