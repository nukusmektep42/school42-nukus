// Работа с данными: Supabase или демо-режим (если ключи не вставлены).
(function () {
  "use strict";
  var cfg = window.SITE_CONFIG || {};
  var configured = cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY &&
    cfg.SUPABASE_URL.indexOf("YOUR-") === -1 && cfg.SUPABASE_ANON_KEY.indexOf("YOUR-") === -1;

  var client = null;
  if (configured && window.supabase && window.supabase.createClient) {
    client = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
  } else if (configured) {
    console.error("Supabase library failed to load (check internet / CDN).");
  }

  // ---- Демо-данные: видны только пока Supabase не подключён ----
  function daysAgo(n) { var d = new Date(); d.setDate(d.getDate() - n); return d.toISOString(); }
  var DEMO = [
    { id: "demo-1", category: "announcement", published: true, published_at: daysAgo(0), image_url: "",
      title: "Úlgi: mektep saytınıń jańa jańalıqlar bólimi",
      summary: "Bul úlgi jańalıq. Supabase qosılǵannan keyin bul jerde haqıyqıy jańalıqlar shıǵadı.",
      body: "Bul úlgi tekst. Haqıyqıy jańalıqlar basqarıw panelinen qosıladı.\n\nJuwapker xızmetker admin.html betine kirip, atamasın, tekstin hám súwretin jazadı hám \"Járiyalaw\" túymesin basadı." },
    { id: "demo-2", category: "event", published: true, published_at: daysAgo(2), image_url: "",
      title: "Úlgi: ilaje haqqında jańalıq",
      summary: "Ilajeler, bayramlar hám ashıq sabaqlar haqqındaǵı xabarlar usılay kórinedi.",
      body: "Bul úlgi tekst. Ilajeniń sánesi, ornı hám qatnasıwshıları haqqında jazıń." },
    { id: "demo-3", category: "achievement", published: true, published_at: daysAgo(5), image_url: "",
      title: "Úlgi: oqıwshılardıń jetiskenligi",
      summary: "Olimpiada hám tańlawlardaǵı jeńimpazlar haqqında jańalıqlar ushın túr.",
      body: "Bul úlgi tekst. Oqıwshınıń atı, tańlaw atı hám nátiyjesin jazıń." },
    { id: "demo-4", category: "news", published: true, published_at: daysAgo(8), image_url: "",
      title: "Úlgi: ápiwayı jańalıq",
      summary: "Hár kúni mektep turmısındaǵı waqıyalardı usı jerde járiyalań.",
      body: "Bul úlgi tekst." }
  ];

  function demoList(opts) {
    var rows = DEMO.filter(function (n) { return !opts.category || n.category === opts.category; });
    return Promise.resolve({ data: rows.slice(opts.from, opts.to + 1), count: rows.length, error: null });
  }

  var NewsAPI = {
    client: client,
    isDemo: function () { return !configured; },
    isConfigured: function () { return !!client; },

    // Публичный список опубликованных новостей
    list: function (opts) {
      opts = opts || {};
      var from = opts.from || 0, to = (opts.to != null ? opts.to : from + (cfg.NEWS_PER_PAGE || 9) - 1);
      if (!configured) return demoList({ from: from, to: to, category: opts.category });
      if (!client) return Promise.resolve({ data: null, error: new Error("no client") });
      var q = client.from("news")
        .select("id,title,summary,image_url,category,published_at", { count: "exact" })
        .eq("published", true)
        .lte("published_at", new Date().toISOString())
        .order("published_at", { ascending: false })
        .range(from, to);
      if (opts.category) q = q.eq("category", opts.category);
      return q;
    },

    get: function (id) {
      if (!configured) {
        var n = DEMO.filter(function (x) { return x.id === id; })[0] || null;
        return Promise.resolve({ data: n, error: null });
      }
      if (!client) return Promise.resolve({ data: null, error: new Error("no client") });
      return client.from("news").select("*").eq("id", id).eq("published", true).maybeSingle();
    }
  };

  window.NewsAPI = NewsAPI;
})();
