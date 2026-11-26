// =====================================================================
//  Настройки подключения к Supabase
//  Supabase → Project Settings → API (или "Connect"):
//    SUPABASE_URL      — Project URL
//    SUPABASE_ANON_KEY — anon / publishable key (его можно показывать
//                        публично, данные защищены правилами в schema.sql)
//  НИКОГДА не вставляйте сюда service_role / secret key!
//
//  Пока здесь стоят заглушки, сайт работает в демо-режиме с примерами
//  новостей, а админ-панель не работает.
// =====================================================================
window.SITE_CONFIG = {
  SUPABASE_URL: "https://pbqnuzpmzvqdibrklitx.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_AIxwlDv0WL8zTylWVWK6xA_llWDuIFx",
  NEWS_PER_PAGE: 9
};
