import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Страница не найдена',
  description: 'Такой страницы на сайте gwensoft нет.',
}

export default function NotFound() {
  return (
    <main className="not-found container">
      <p className="eyebrow">404</p>
      <h1>Такой страницы нет</h1>
      <p>Адрес устарел или набран с ошибкой. Вернитесь на главную или откройте портфолио.</p>
      <div className="hero-buttons">
        <a className="button button-primary" href="/">
          На главную
        </a>
        <a className="button button-secondary" href="/projects/">
          Проекты
        </a>
      </div>
    </main>
  )
}
