// Basqarıw paneli: kiriw, jańalıqlardı qosıw / ózgertiw / óshiriw, súwret júklew.
(function () {
  "use strict";
  var Site = window.Site, esc = Site.escapeHtml, lang = Site.lang();
  var BUCKET = "news-images";

  var A = {
    kaa: {
      title: "Basqarıw paneli", login_title: "Basqarıw paneline kiriw", email: "E-pochta", password: "Parol",
      login: "Kiriw", logout: "Shıǵıw", back_site: "Saytqa ótiw",
      login_error: "E-pochta yamasa parol qáte.",
      no_access: "Bul akkauntta basqarıw huqıqı joq. Saytqa juwapker adamǵa múrájat etiń.",
      not_configured: "Supabase ele qosılmaǵan: js/config.js faylına Project URL hám anon key jazıń (README.md qarań).",
      lib_error: "Supabase kitapxanası júklenbedi. Internetti tekserip, betti qayta ashıń.",
      news_list: "Barlıq jańalıqlar", new_news: "+ Jańa jańalıq", edit_news: "Jańalıqtı ózgertiw", create_news: "Jańa jańalıq",
      f_title: "Ataması", f_category: "Túri", f_date: "Járiyalaw waqtı",
      f_date_hint: "Keleshek waqıttı tańlasańız, jańalıq saytta sol waqıtta shıǵadı.",
      f_summary: "Qısqasha mazmunı", f_summary_hint: "Kartochkada kórinedi, 400 belgige shekem.",
      f_body: "Tolıq tekst", f_body_hint: "Jańa abzac ushın bos qatar qaldırıń.",
      f_image: "Súwret", f_image_hint: "JPG, PNG yamasa WEBP. Úlken súwretler ózi kishireytiledi.",
      remove_image: "Súwretti alıp taslaw", f_published: "Saytta járiyalaw (belgi qoyılmasa — qaralama)",
      save: "Saqlaw", saving: "Saqlanbaqta…", saved: "Saqlandı ✓", cancel: "Tazalaw",
      edit: "Ózgertiw", del: "Óshiriw", publish: "Járiyalaw", unpublish: "Jasırıw", view: "Kóriw",
      confirm_delete: "Bul jańalıqtı óshiriwdi qáleysiz be? Onı qaytarıp bolmaydı.",
      deleted: "Jańalıq óshirildi.", st_pub: "Járiyalanǵan", st_draft: "Qaralama", st_sched: "Kútilmekte",
      search: "Ataması boyınsha izlew…", empty: "Ele jańalıq joq. Shep tárepte birinshi jańalıqtı qosıń!",
      err: "Qátelik: ", err_title: "Ataması 3 belgiden kem bolmawı kerek.", err_body: "Tolıq tekst bos bolmawı kerek.",
      err_date: "Járiyalaw waqtın kórsetiń.", uploading: "Súwret júklenbekte…", count: "dana"
    },
    uz: {
      title: "Boshqaruv paneli", login_title: "Boshqaruv paneliga kirish", email: "E-pochta", password: "Parol",
      login: "Kirish", logout: "Chiqish", back_site: "Saytga o'tish",
      login_error: "E-pochta yoki parol noto'g'ri.",
      no_access: "Bu akkauntda boshqaruv huquqi yo'q. Sayt uchun mas'ul shaxsga murojaat qiling.",
      not_configured: "Supabase hali ulanmagan: js/config.js fayliga Project URL va anon key yozing (README.md ga qarang).",
      lib_error: "Supabase kutubxonasi yuklanmadi. Internetni tekshirib, sahifani qayta oching.",
      news_list: "Barcha yangiliklar", new_news: "+ Yangi yangilik", edit_news: "Yangilikni tahrirlash", create_news: "Yangi yangilik",
      f_title: "Sarlavha", f_category: "Turi", f_date: "E'lon qilish vaqti",
      f_date_hint: "Kelajakdagi vaqtni tanlasangiz, yangilik saytda o'sha vaqtda chiqadi.",
      f_summary: "Qisqacha mazmuni", f_summary_hint: "Kartochkada ko'rinadi, 400 belgigacha.",
      f_body: "To'liq matn", f_body_hint: "Yangi xatboshi uchun bo'sh qator qoldiring.",
      f_image: "Rasm", f_image_hint: "JPG, PNG yoki WEBP. Katta rasmlar avtomatik kichraytiriladi.",
      remove_image: "Rasmni olib tashlash", f_published: "Saytda e'lon qilish (belgilanmasa — qoralama)",
      save: "Saqlash", saving: "Saqlanmoqda…", saved: "Saqlandi ✓", cancel: "Tozalash",
      edit: "Tahrirlash", del: "O'chirish", publish: "E'lon qilish", unpublish: "Yashirish", view: "Ko'rish",
      confirm_delete: "Bu yangilikni o'chirishni xohlaysizmi? Uni qaytarib bo'lmaydi.",
      deleted: "Yangilik o'chirildi.", st_pub: "E'lon qilingan", st_draft: "Qoralama", st_sched: "Kutilmoqda",
      search: "Sarlavha bo'yicha qidirish…", empty: "Hali yangilik yo'q. Chap tomonda birinchi yangilikni qo'shing!",
      err: "Xatolik: ", err_title: "Sarlavha kamida 3 belgidan iborat bo'lishi kerak.", err_body: "To'liq matn bo'sh bo'lmasligi kerak.",
      err_date: "E'lon qilish vaqtini ko'rsating.", uploading: "Rasm yuklanmoqda…", count: "ta"
    },
    en: {
      title: "Admin panel", login_title: "Sign in to the admin panel", email: "Email", password: "Password",
      login: "Sign in", logout: "Sign out", back_site: "View site",
      login_error: "Wrong email or password.",
      no_access: "This account has no admin rights. Contact the person responsible for the site.",
      not_configured: "Supabase is not connected yet: add the Project URL and anon key to js/config.js (see README.md).",
      lib_error: "The Supabase library failed to load. Check the internet connection and reload.",
      news_list: "All news", new_news: "+ New post", edit_news: "Edit post", create_news: "New post",
      f_title: "Title", f_category: "Type", f_date: "Publish time",
      f_date_hint: "If you pick a future time, the post appears on the site at that time.",
      f_summary: "Short summary", f_summary_hint: "Shown on the card, up to 400 characters.",
      f_body: "Full text", f_body_hint: "Leave an empty line to start a new paragraph.",
      f_image: "Image", f_image_hint: "JPG, PNG or WEBP. Large images are resized automatically.",
      remove_image: "Remove image", f_published: "Publish on the site (unchecked = draft)",
      save: "Save", saving: "Saving…", saved: "Saved ✓", cancel: "Clear",
      edit: "Edit", del: "Delete", publish: "Publish", unpublish: "Hide", view: "View",
      confirm_delete: "Delete this post? This cannot be undone.",
      deleted: "Post deleted.", st_pub: "Published", st_draft: "Draft", st_sched: "Scheduled",
      search: "Search by title…", empty: "No posts yet. Add the first one on the left!",
      err: "Error: ", err_title: "The title must be at least 3 characters.", err_body: "The full text must not be empty.",
      err_date: "Set the publish time.", uploading: "Uploading image…", count: "posts"
    }
  };
  function a(k) { return (A[lang] && A[lang][k]) || A.kaa[k] || k; }

  var $ = function (id) { return document.getElementById(id); };
  var client = window.NewsAPI.client;
  var state = { items: [], editing: null, imageUrl: "", newFile: null, removeOld: false };

  // ---- Interfeys tekstleri ----
  document.querySelectorAll("[data-a]").forEach(function (el) { el.textContent = a(el.getAttribute("data-a")); });
  document.documentElement.lang = lang;
  document.title = a("title") + " — " + Site.L(window.SCHOOL.shortName);
  $("search").placeholder = a("search");
  $("f-category").innerHTML = Site.CATEGORIES.map(function (c) {
    return '<option value="' + c + '">' + esc(Site.catLabel(c)) + "</option>";
  }).join("");
  $("lang-switch").innerHTML = Site.LANGS.map(function (l) {
    return '<button data-lang="' + l + '"' + (l === lang ? ' aria-pressed="true"' : "") + ">" + Site.LANG_LABELS[l] + "</button>";
  }).join("");
  $("lang-switch").addEventListener("click", function (e) {
    var b = e.target.closest("[data-lang]"); if (b) Site.setLang(b.getAttribute("data-lang"));
  });

  function msg(el, text, kind) {
    el.textContent = text; el.className = "alert alert--" + (kind || "info"); el.hidden = !text;
  }
  function show(view) {
    $("login-view").hidden = view !== "login";
    $("dash-view").hidden = view !== "dash";
    $("logout").hidden = view !== "dash";
  }

  // ---- Sáne: input[datetime-local] <-> ISO ----
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function toLocalInput(iso) {
    var d = iso ? new Date(iso) : new Date();
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) + "T" + pad(d.getHours()) + ":" + pad(d.getMinutes());
  }
  function fromLocalInput(v) { var d = new Date(v); return isNaN(d) ? null : d.toISOString(); }

  // ---- Baslaw ----
  if (window.NewsAPI.isDemo()) { msg($("global-msg"), a("not_configured"), "info"); return; }
  if (!client) { msg($("global-msg"), a("lib_error"), "error"); return; }

  client.auth.getSession().then(function (r) {
    var session = r && r.data && r.data.session;
    if (session) enter(session.user); else show("login");
  });

  $("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var btn = this.querySelector("button[type=submit]");
    btn.disabled = true; $("login-msg").hidden = true;
    client.auth.signInWithPassword({ email: $("email").value.trim(), password: $("password").value })
      .then(function (r) {
        btn.disabled = false;
        if (r.error || !r.data || !r.data.user) { msg($("login-msg"), a("login_error"), "error"); return; }
        $("password").value = "";
        enter(r.data.user);
      });
  });

  $("logout").addEventListener("click", function () {
    client.auth.signOut().then(function () { $("who").textContent = ""; resetForm(); show("login"); });
  });

  function enter(user) {
    client.from("admins").select("user_id").eq("user_id", user.id).maybeSingle().then(function (r) {
      if (r.error || !r.data) {
        client.auth.signOut();
        show("login");
        msg($("login-msg"), a("no_access"), "error");
        return;
      }
      $("who").textContent = user.email || "";
      show("dash");
      resetForm();
      loadList();
    });
  }

  // ---- Dizim ----
  function statusOf(n) {
    if (!n.published) return ["draft", a("st_draft")];
    if (new Date(n.published_at) > new Date()) return ["sched", a("st_sched")];
    return ["pub", a("st_pub")];
  }

  function loadList() {
    client.from("news").select("*").order("published_at", { ascending: false }).limit(300).then(function (r) {
      if (r.error) { msg($("global-msg"), a("err") + r.error.message, "error"); return; }
      state.items = r.data || [];
      renderList();
    });
  }

  function renderList() {
    var q = $("search").value.trim().toLowerCase();
    var rows = state.items.filter(function (n) { return !q || n.title.toLowerCase().indexOf(q) >= 0; });
    $("count").textContent = state.items.length + " " + a("count");
    if (!state.items.length) { $("admin-list").innerHTML = '<li class="muted">' + esc(a("empty")) + "</li>"; return; }
    $("admin-list").innerHTML = rows.map(function (n) {
      var st = statusOf(n), img = Site.safeUrl(n.image_url);
      var active = state.editing && state.editing.id === n.id ? " is-active" : "";
      return '<li class="admin-item' + active + '" data-id="' + esc(n.id) + '">' +
        '<div class="admin-item__thumb">' + (img ? '<img src="' + esc(img) + '" alt="">' : "42") + "</div>" +
        "<div><h3>" + esc(n.title) + "</h3>" +
        '<div class="meta"><span class="status status--' + st[0] + '">' + esc(st[1]) + "</span>" +
        '<span>' + esc(Site.catLabel(n.category)) + "</span><span>" + esc(Site.formatDate(n.published_at)) + "</span></div>" +
        '<div class="admin-item__actions">' +
          '<button class="btn btn--ghost btn--small" data-act="edit">' + esc(a("edit")) + "</button>" +
          '<button class="btn btn--ghost btn--small" data-act="toggle">' + esc(n.published ? a("unpublish") : a("publish")) + "</button>" +
          (n.published ? '<a class="btn btn--ghost btn--small" target="_blank" href="article.html?id=' + encodeURIComponent(n.id) + '">' + esc(a("view")) + "</a>" : "") +
          '<button class="btn btn--danger btn--small" data-act="delete">' + esc(a("del")) + "</button>" +
        "</div></div></li>";
    }).join("");
  }

  $("search").addEventListener("input", renderList);
  $("admin-list").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-act]"); if (!btn) return;
    var id = btn.closest("[data-id]").getAttribute("data-id");
    var n = state.items.filter(function (x) { return x.id === id; })[0]; if (!n) return;
    var act = btn.getAttribute("data-act");
    if (act === "edit") { fillForm(n); window.scrollTo({ top: 0, behavior: "smooth" }); }
    if (act === "toggle") {
      btn.disabled = true;
      client.from("news").update({ published: !n.published }).eq("id", n.id).select().single().then(function (r) {
        if (r.error) { msg($("global-msg"), a("err") + r.error.message, "error"); btn.disabled = false; return; }
        replaceItem(r.data);
        if (state.editing && state.editing.id === n.id) $("f-published").checked = r.data.published;
      });
    }
    if (act === "delete") {
      if (!window.confirm(a("confirm_delete"))) return;
      client.from("news").delete().eq("id", n.id).then(function (r) {
        if (r.error) { msg($("global-msg"), a("err") + r.error.message, "error"); return; }
        removeStoredImage(n.image_url);
        state.items = state.items.filter(function (x) { return x.id !== n.id; });
        if (state.editing && state.editing.id === n.id) resetForm();
        renderList();
        msg($("global-msg"), a("deleted"), "ok");
      });
    }
  });

  function replaceItem(row) {
    var found = false;
    state.items = state.items.map(function (x) { if (x.id === row.id) { found = true; return row; } return x; });
    if (!found) state.items.unshift(row);
    state.items.sort(function (x, y) { return new Date(y.published_at) - new Date(x.published_at); });
    renderList();
  }

  // ---- Forma ----
  function setPreview(url) {
    var p = $("f-preview");
    if (url) { p.src = url; p.hidden = false; $("f-remove-img").hidden = false; }
    else { p.removeAttribute("src"); p.hidden = true; $("f-remove-img").hidden = true; }
  }

  function resetForm() {
    state.editing = null; state.imageUrl = ""; state.newFile = null; state.removeOld = false;
    $("editor").reset();
    $("f-published").checked = true;
    $("f-date").value = toLocalInput();
    $("editor-title").textContent = a("create_news");
    $("editor-msg").hidden = true;
    setPreview("");
    if (state.items.length) renderList();
  }

  function fillForm(n) {
    state.editing = n; state.imageUrl = n.image_url || ""; state.newFile = null; state.removeOld = false;
    $("f-title").value = n.title || "";
    $("f-category").value = n.category || "news";
    $("f-date").value = toLocalInput(n.published_at);
    $("f-summary").value = n.summary || "";
    $("f-body").value = n.body || "";
    $("f-published").checked = !!n.published;
    $("f-image").value = "";
    $("editor-title").textContent = a("edit_news");
    $("editor-msg").hidden = true;
    setPreview(Site.safeUrl(state.imageUrl));
    renderList();
  }

  $("new-btn").addEventListener("click", resetForm);
  $("cancel-btn").addEventListener("click", resetForm);

  $("f-image").addEventListener("change", function () {
    var f = this.files && this.files[0];
    if (!f) return;
    state.newFile = f;
    setPreview(URL.createObjectURL(f));
  });
  $("f-remove-img").addEventListener("click", function () {
    state.newFile = null; state.removeOld = !!state.imageUrl; $("f-image").value = ""; setPreview("");
  });

  // Úlken súwretti 1600px-ge shekem kishireytip, JPEG qılıw
  function shrink(file) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onload = function () {
        var max = 1600, w = img.naturalWidth, h = img.naturalHeight;
        var k = Math.min(1, max / Math.max(w, h));
        var c = document.createElement("canvas");
        c.width = Math.round(w * k); c.height = Math.round(h * k);
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(img, 0, 0, c.width, c.height);
        c.toBlob(function (b) { resolve(b || file); }, "image/jpeg", 0.85);
        URL.revokeObjectURL(img.src);
      };
      img.onerror = function () { resolve(file); };
      img.src = URL.createObjectURL(file);
    });
  }

  function storagePath(url) {
    var marker = "/storage/v1/object/public/" + BUCKET + "/";
    var i = (url || "").indexOf(marker);
    return i >= 0 ? decodeURIComponent(url.slice(i + marker.length).split("?")[0]) : null;
  }
  function removeStoredImage(url) {
    var p = storagePath(url);
    if (p) client.storage.from(BUCKET).remove([p]);
  }

  function uploadImage(file) {
    return shrink(file).then(function (blob) {
      var d = new Date();
      var rnd = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2);
      var path = "news/" + d.getFullYear() + "/" + pad(d.getMonth() + 1) + "/" + rnd + ".jpg";
      return client.storage.from(BUCKET).upload(path, blob, { contentType: "image/jpeg", upsert: false }).then(function (r) {
        if (r.error) throw r.error;
        return client.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
      });
    });
  }

  $("editor").addEventListener("submit", function (e) {
    e.preventDefault();
    var box = $("editor-msg");
    var title = $("f-title").value.trim(), body = $("f-body").value.trim();
    var when = fromLocalInput($("f-date").value);
    if (title.length < 3) { msg(box, a("err_title"), "error"); $("f-title").focus(); return; }
    if (!body) { msg(box, a("err_body"), "error"); $("f-body").focus(); return; }
    if (!when) { msg(box, a("err_date"), "error"); $("f-date").focus(); return; }

    var btn = $("save-btn");
    btn.disabled = true; btn.textContent = a("saving");
    var oldUrl = state.editing ? (state.editing.image_url || "") : "";

    var imgStep = state.newFile
      ? (msg(box, a("uploading"), "info"), uploadImage(state.newFile))
      : Promise.resolve(state.removeOld ? "" : state.imageUrl);

    imgStep.then(function (imageUrl) {
      var row = {
        title: title, body: body, summary: $("f-summary").value.trim() || null,
        category: $("f-category").value, published: $("f-published").checked,
        published_at: when, image_url: imageUrl || null
      };
      var q = state.editing
        ? client.from("news").update(row).eq("id", state.editing.id).select().single()
        : client.from("news").insert(row).select().single();
      return q.then(function (r) {
        if (r.error) throw r.error;
        if (oldUrl && oldUrl !== (imageUrl || "")) removeStoredImage(oldUrl);
        replaceItem(r.data);
        fillForm(r.data);
        msg(box, a("saved"), "ok");
      });
    }).catch(function (err) {
      msg(box, a("err") + (err && err.message ? err.message : String(err)), "error");
    }).then(function () { btn.disabled = false; btn.textContent = a("save"); });
  });
})();
