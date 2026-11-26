-- =====================================================================
--  Сайт школы №42 — база данных Supabase
--  Выполните этот файл целиком: Supabase → SQL Editor → New query → Run
--  Повторный запуск безопасен (ничего не удалит).
-- =====================================================================

-- 1. Кто может управлять сайтом -----------------------------------------
create table if not exists public.admins (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  full_name  text,
  created_at timestamptz not null default now()
);

-- Проверка «текущий пользователь — администратор?»
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

-- 2. Новости -------------------------------------------------------------
create table if not exists public.news (
  id           uuid primary key default gen_random_uuid(),
  title        text not null check (char_length(title) between 3 and 200),
  summary      text check (summary is null or char_length(summary) <= 400),
  body         text not null,
  image_url    text,
  category     text not null default 'news',   -- news | event | announcement | achievement
  published    boolean not null default false,
  published_at timestamptz not null default now(),
  author_id    uuid default auth.uid() references auth.users (id) on delete set null,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index if not exists news_published_idx
  on public.news (published, published_at desc);

-- updated_at обновляется сам
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists news_touch on public.news;
create trigger news_touch before update on public.news
  for each row execute function public.touch_updated_at();

-- 3. Права доступа (Row Level Security) ----------------------------------
alter table public.news   enable row level security;
alter table public.admins enable row level security;

-- Посетители видят только опубликованные новости; админ видит все
drop policy if exists "news: read" on public.news;
create policy "news: read" on public.news
  for select using (published = true or public.is_admin());

drop policy if exists "news: admin insert" on public.news;
create policy "news: admin insert" on public.news
  for insert with check (public.is_admin());

drop policy if exists "news: admin update" on public.news;
create policy "news: admin update" on public.news
  for update using (public.is_admin()) with check (public.is_admin());

drop policy if exists "news: admin delete" on public.news;
create policy "news: admin delete" on public.news
  for delete using (public.is_admin());

-- Пользователь может проверить только свою запись в admins
drop policy if exists "admins: read self" on public.admins;
create policy "admins: read self" on public.admins
  for select using (user_id = auth.uid());
-- Добавлять администраторов можно только через SQL Editor (см. README).

-- API-ге kiriw huqıqları (proekt "Grant API access automatically" belgisisiz
-- jaratılǵan bolsa da isleydi; qatarlardı joqarıdaǵı RLS qaǵıydaları sheklep turadı)
grant usage on schema public to anon, authenticated;
grant select on public.news to anon, authenticated;
grant insert, update, delete on public.news to authenticated;
grant select on public.admins to authenticated;
grant execute on function public.is_admin() to anon, authenticated;

-- 4. Хранилище фото -----------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('news-images', 'news-images', true, 5242880,
        array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do nothing;

drop policy if exists "news-images: admin upload" on storage.objects;
create policy "news-images: admin upload" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'news-images' and public.is_admin());

drop policy if exists "news-images: admin update" on storage.objects;
create policy "news-images: admin update" on storage.objects
  for update to authenticated
  using (bucket_id = 'news-images' and public.is_admin());

drop policy if exists "news-images: admin delete" on storage.objects;
create policy "news-images: admin delete" on storage.objects
  for delete to authenticated
  using (bucket_id = 'news-images' and public.is_admin());

-- =====================================================================
--  После создания пользователя (Authentication → Users → Add user)
--  сделайте его администратором — подставьте его email:
--
--  insert into public.admins (user_id, full_name)
--  select id, 'Имя Фамилия' from auth.users where email = 'admin@example.com';
-- =====================================================================
