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

Готовый сайт в `out/`. На Apache есть `public/.htaccess` → `out/.htaccess`.

## Контент

Всё в `lib/content.ts`: контакты, услуги, аудитории, FAQ, проекты. Заглушки вида `{{…}}`.
