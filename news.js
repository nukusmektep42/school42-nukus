(function () {
  "use strict";
  var Site = window.Site, t = Site.t, esc = Site.escapeHtml, S = window.SCHOOL;
  var PER = (window.SITE_CONFIG && window.SITE_CONFIG.NEWS_PER_PAGE) || 9;

  Site.renderChrome("news");
  document.title = t("nav_news") + " — " + Site.L(S.shortName);
  document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = t(el.getAttribute("data-t")); });

  var list = document.getElementById("news-list");
  var more = document.getElementById("load-more");
  var filters = document.getElementById("filters");
  var params = new URLSearchParams(location.search);
  var category = Site.CATEGORIES.indexOf(params.get("cat")) >= 0 ? params.get("cat") : "";
  var loaded = 0;

  function renderFilters() {
    var cats = [""].concat(Site.CATEGORIES);
    filters.innerHTML = cats.map(function (c) {
      return '<button role="tab" data-cat="' + c + '" aria-selected="' + (c === category) + '">' +
        esc(c ? Site.catLabel(c) : t("cat_all")) + "</button>";
    }).join("");
    filters.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () {
        category = b.getAttribute("data-cat");
        var u = new URL(location.href);
        if (category) u.searchParams.set("cat", category); else u.searchParams.delete("cat");
        history.replaceState(null, "", u);
        renderFilters();
        loaded = 0; list.innerHTML = ""; load();
      });
    });
  }

  function load() {
    more.hidden = true;
    if (!loaded) list.innerHTML = '<p class="muted">' + esc(t("loading")) + "</p>";
    Promise.resolve(window.NewsAPI.list({ from: loaded, to: loaded + PER - 1, category: category })).then(function (res) {
      if (res.error) throw res.error;
      var rows = res.data || [];
      if (!loaded) list.innerHTML = "";
      if (!loaded && !rows.length) { list.innerHTML = '<p class="muted">' + esc(t("no_news")) + "</p>"; return; }
      list.insertAdjacentHTML("beforeend", rows.map(Site.newsCard).join(""));
      loaded += rows.length;
      more.hidden = !(res.count != null ? loaded < res.count : rows.length === PER);
    }).catch(function (e) {
      console.error(e);
      list.innerHTML = '<p class="muted">' + esc(t("load_error")) + "</p>";
    });
  }

  more.addEventListener("click", load);
  renderFilters();
  load();
})();
