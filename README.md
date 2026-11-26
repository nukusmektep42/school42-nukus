# Nókis qalası 42-sanlı mekteptiń saytı

Sayt úsh tilde islaydı: qaraqalpaqsha (tiykarǵı), ózbekshe hám inglisshe.
Jańalıqlar basqarıw paneli arqalı (`admin.html`) hár kúni qosıladı.

| Bet | Ne ushın |
|---|---|
| `index.html` | Bas bet: mektep haqqında, sońǵı jańalıqlar, muǵallimler, qońıraw kestesi, qabıllaw, baylanıs |
| `news.html` | Barlıq jańalıqlar, túrleri boyınsha filtr |
| `article.html?id=…` | Bir jańalıqtıń tolıq teksti |
| `admin.html` | Basqarıw paneli: kiriw, jańalıq qosıw / ózgertiw / jasırıw / óshiriw, súwret júklew |

> **Sayttı internetke shıǵarıwdan aldın mektep basshılıǵınıń (direktordıń) ruqsatın alıń.**
> Sayt mekteptiń atınan sóyleydi.

---

## 1. Supabase (maǵlıwmatlar bazası, biypul)

1. https://supabase.com saytında akkaunt ashıń → **New project**. Atı: `school42`, region: Evropaǵa jaqın birewin tańlań. Bazanıń parolin saqlap qoyıń.
2. Proekt ashılǵannan keyin: **SQL Editor → New query**. `supabase/schema.sql` faylınıń barlıq tekstin kóshirip qoyıń → **Run**.
   Bul jańalıqlar kestesin, súwretler ushın papkanı hám qáwipsizlik qaǵıydaların (RLS) jaratadı.
3. **Authentication → Users → Add user → Create new user**: jańalıqlardı jazatuǵın adamnıń e-pochtası hám parolin kirgiziń. «Auto Confirm User» belgisin qoyıń.
4. Sol adamdı administrator qılıń. SQL Editor-da (e-pochtanı almastırıń):
   ```sql
   insert into public.admins (user_id, full_name)
   select id, 'Atı Familiyası' from auth.users where email = 'admin@example.com';
   ```
5. Basqalar ózi dizimnen óte almawı ushın: **Authentication → Sign In / Providers → Email** bóliminde
   «Allow new users to sign up» opciyasın óshiriń.
6. **Project Settings → API** (yamasa joqarıdaǵı **Connect** túymesi): `Project URL` hám `anon` / `publishable` giltin kóshiriń.

## 2. Giltlerdi saytqa jazıw

`js/config.js` faylın ashıp, eki qatardı ózgertiń:

```js
SUPABASE_URL: "https://abcdefgh.supabase.co",
SUPABASE_ANON_KEY: "eyJhbGciOi…  yamasa  sb_publishable_…",
```

⚠️ `service_role` / `secret` giltin **hesh qashan** jazbań — ol saytta hámmege kórinip qaladı.
`anon` gilti jarıya bolıwı múmkin: maǵlıwmatlardı RLS qaǵıydaları qorǵaydı.

Giltler jazılmaǵansha sayt **demo rejimde** islaydı (úlgi jańalıqlar kórsetiledi).

## 3. Mektep maǵlıwmatların toltırıw

`js/school.js` faylında `[ … ]` ishindegi barlıq tekstlerdi haqıyqıy maǵlıwmatqa almastırıń:
mekteptiń anıq atı, mánzil, telefon, muǵallimler, qońıraw kestesi, qabıllaw tártibi, sanlar.
Hár bir tekst úsh tilde (`kaa`, `uz`, `en`). Telegram kanal bolsa, `telegram` qatarına siltemeni jazıń.

## 4. Vercel-ge shıǵarıw (JUMIS AI sıyaqlı)

**GitHub arqalı (usınıladı):**
1. GitHub-ta jańa repozitoriy ashıń (mısalı `school42-nukus`) hám usı papkadaǵı fayllardı júkleń.
2. https://vercel.com → **Add New → Project** → repozitoriydi tańlań.
   Framework: **Other**, Build Command: bos, Output Directory: bos → **Deploy**.
3. Siltemeńiz tayın: `school42-nukus.vercel.app`. Keyin GitHub-taǵı hár ózgeris saytqa ózi shıǵadı.

**Terminal arqalı:** papkada `npx vercel` → sorawlarǵa juwap beriń → `npx vercel --prod`.

Óz domeni kerek bolsa (mısalı `school42.uz`): Vercel → Project → Settings → Domains.

## 5. Jańalıq qalay qosıladı (juwapker xızmetker ushın)

1. `https://<sayt>/admin.html` betin ashıń (saytdıń tómenindegi «Basqarıw» siltemesi).
2. E-pochta hám parol menen kiriń.
3. **Ataması**, **Túri** (Jańalıq / Ilaje / Daǵaza / Jetiskenlik), **Qısqasha mazmunı**, **Tolıq tekst** jazıń, kerek bolsa **Súwret** qosıń.
4. «Saytta járiyalaw» belgisi qoyılsa → **Saqlaw** basılǵanda jańalıq birden saytta shıǵadı.
   Belgi qoyılmasa — qaralama bolıp saqlanadı, saytta kórinbeydi.
5. **Járiyalaw waqtı** keleshekke qoyılsa, jańalıq sol waqıtta ózi shıǵadı.
6. Dizimde: **Ózgertiw**, **Jasırıw / Járiyalaw**, **Kóriw**, **Óshiriw**.

Kórsetpeler:
- Jańa abzac ushın tekstte bos qatar qaldırıń.
- Úlken súwretler júklew waqtında ózi 1600 px-ge shekem kishireytiledi.
- Telefonnan da islewge boladı.

## Bilip qoyıw kerek

- Supabase-tiń biypul tarifinde proekt uzaq waqıt paydalanılmasa, waqıtsha toqtatılıwı múmkin — Supabase panelinen qayta iske túsiriledi. Hár kúni jańalıq qosılsa, bul máseleler azayadı.
- Jańalıq bir tilde jazıladı hám saytdıń barlıq til versiyalarında sol kúyinde kórinedi (menyu hám túymeler til boyınsha ózgeredi).
- Bazanıń rezerv nusqası: Supabase → Database → Backups (tarifke baylanıslı) yamasa `Table Editor → news → Export CSV`.

## Fayllar dúzilisi

```
index.html, news.html, article.html, admin.html
css/style.css
js/config.js     ← Supabase giltleri
js/school.js     ← mektep haqqında maǵlıwmat (úsh tilde)
js/common.js     ← tiller, shapka/podval, ulıwma funkciyalar
js/api.js        ← jańalıqlardı alıw (+ demo rejim)
js/home.js, js/news.js, js/article.js, js/admin.js
supabase/schema.sql
assets/favicon.svg
```
