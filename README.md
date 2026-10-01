# gwensoft

Статический сайт IT-студии. Стек: Next.js (`output: 'export'`) + TypeScript + Tailwind CSS v4.

## Локально

```bash
pnpm install
pnpm dev
```

Открой http://localhost:3000

## Статическая сборка

```bash
pnpm build
```

Готовый сайт в папке `out/`. Залей **содержимое** `out/` на хостинг по SSH/SFTP (Beget, Timeweb и т.п.) — Node.js не нужен.

На Apache уже лежит `.htaccess` (404 и кэш). Для nginx:

```nginx
error_page 404 /404.html;
try_files $uri $uri/ $uri.html /404.html;
```

## Контент

Всё в `lib/content.ts`: контакты, услуги, аудитории, FAQ, проекты. Заглушки вида `{{…}}`.
