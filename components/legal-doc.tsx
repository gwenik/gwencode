import type { ReactNode } from 'react'
import { legal, legalNav } from '@/lib/legal'

export function LegalDoc({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <main className="legal-page container">
      <div className="breadcrumbs">
        <a href="/">Главная</a>
        <span aria-hidden>/</span>
        <b>{title}</b>
      </div>
      <p className="eyebrow">Юридическая информация</p>
      <h1>{title}</h1>
      <p className="legal-meta">
        Редакция от {legal.docsUpdated} · Оператор: {legal.operatorShort}
      </p>
      <nav className="legal-toc" aria-label="Другие документы">
        {legalNav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <article className="legal-body">{children}</article>
    </main>
  )
}
