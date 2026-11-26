(function () {
  "use strict";
  var Site = window.Site, t = Site.t, esc = Site.escapeHtml, S = window.SCHOOL;
  Site.renderChrome("news");

  var box = document.getElementById("article");
  var id = new URLSearchParams(location.search).get("id");
  var back = '<a class="link-arrow back" href="news.html">← ' + esc(t("back_to_news")) + "</a>";

  function fail(msg) { box.innerHTML = back + '<p class="muted">' + esc(msg) + "</p>"; }
  if (!id) { fail(t("not_found")); return; }

  box.innerHTML = '<p class="muted">' + esc(t("loading")) + "</p>";
  Promise.resolve(window.NewsAPI.get(id)).then(function (res) {
    if (res.error) throw res.error;
    var n = res.data;
    if (!n) { fail(t("not_found")); return; }
    document.title = n.title + " — " + Site.L(S.shortName);
    var img = Site.safeUrl(n.image_url);
    box.innerHTML = back +
      '<header class="article__head">' +
        '<div class="meta"><span class="tag tag--' + esc(n.category || "news") + '">' + esc(Site.catLabel(n.category)) + "</span>" +
        '<time datetime="' + esc(n.published_at) + '">' + esc(Site.formatDate(n.published_at)) + "</time></div>" +
        "<h1>" + esc(n.title) + "</h1>" +
        (n.summary ? '<p class="article__lead">' + esc(n.summary) + "</p>" : "") +
      "</header>" +
      (img ? '<figure class="article__img"><img src="' + esc(img) + '" alt=""></figure>' : "") +
      '<div class="article__body">' + Site.bodyToHtml(n.body) + "</div>" +
      '<div class="article__foot"><button class="btn btn--ghost" id="share">' + esc(t("share")) + "</button></div>";

    document.getElementById("share").addEventListener("click", function () {
      var data = { title: n.title, url: location.href };
      if (navigator.share) { navigator.share(data).catch(function () {}); return; }
      var btn = this;
      (navigator.clipboard ? navigator.clipboard.writeText(location.href) : Promise.reject())
        .then(function () { btn.textContent = t("copied"); })
        .catch(function () { window.prompt("", location.href); });
    });
  }).catch(function (e) { console.error(e); fail(t("load_error")); });
})();
