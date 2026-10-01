'use client'

import { useEffect, useState } from 'react'
import { Menu, MessageCircle, Phone, Send, X } from 'lucide-react'
import { buildContactLink, site } from '@/lib/content'

const nav = [
  { href: '/#about', label: 'Кто мы' },
  { href: '/#audiences', label: 'Что решаем' },
  { href: '/projects/', label: 'Проекты' },
  { href: '/#contact', label: 'Связаться' },
]

export function LogoMark({ className = 'logo-mark' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="16" fill="#d2f26a" />
      <path
        fill="#14180f"
        d="M17.6 22.8c2.2-2.5 5.2-3.8 9-3.8 3.5 0 6.3 1 8.4 3 2.1 2 3.1 4.7 3.1 8.1v11.5h-5.8V30.3c0-2-.5-3.5-1.6-4.6-1-1.1-2.5-1.6-4.3-1.6-2.1 0-3.7.7-4.9 2.2-1.2 1.4-1.8 3.4-1.8 5.9s.6 4.5 1.8 5.9c1.2 1.5 2.8 2.2 4.9 2.2 1.5 0 2.9-.3 4-.9.6-.3 1.1-.2 1.4.3l2.8 3.1c-.5.5-1.1.9-1.8 1.2-1.9.9-4.1 1.4-6.5 1.4-3.8 0-6.8-1.3-9-3.8-2.2-2.5-3.3-5.9-3.3-10.1 0-4.2 1.1-7.6 3.3-10.1z"
      />
      <path
        fill="#14180f"
        d="M36.8 23.6c1.9-1.6 4.3-2.4 7.2-2.4 2.5 0 4.6.6 6.2 1.7 1.7 1.1 2.6 2.7 2.8 4.8h-5.7c-.2-.8-.7-1.4-1.5-1.8-.8-.4-1.8-.6-2.9-.6-1.2 0-2.2.2-2.9.7-.7.5-1.1 1-1.1 1.7 0 .6.3 1.1.9 1.4.5.3 1.4.6 2.7.9l2.7.7c2.3.6 3.9 1.5 4.9 2.7 1 1.2 1.5 2.7 1.5 4.5 0 2.5-.9 4.5-2.8 5.9-1.9 1.5-4.4 2.2-7.6 2.2-2.8 0-5.2-.6-7.1-1.9-1.9-1.2-3-3.1-3.3-5.5h5.9c.3 1 .8 1.7 1.7 2.2.9.4 2 .6 3.3.6 1.3 0 2.4-.3 3.1-.8.7-.5 1.1-1.1 1.1-1.8 0-.7-.4-1.2-1.1-1.6-.7-.4-1.8-.7-3.2-1.1l-2.6-.7c-2.1-.6-3.6-1.4-4.5-2.6-.9-1.2-1.4-2.7-1.4-4.5 0-2.4.9-4.3 2.6-5.8z"
      />
    </svg>
  )
}

export function Logo() {
  return (
    <a href="/" className="logo" aria-label="gwensoft — на главную">
      <LogoMark />
      <span className="logo-word">
        gwen<span>soft</span>
      </span>
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-lock', open)
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <nav className={open ? 'mobile-open' : ''} aria-label="Главная навигация">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-tg">
          <span className="tg-nudge" aria-hidden="true">
            Нажмите сюда <span>→</span>
          </span>
          <a className="tg-channel" href={buildContactLink('channel')} target="_blank" rel="noopener noreferrer">
            <span className="tg-channel-label">наш тгк</span>
            <span>@{site.channel}</span>
          </a>
        </div>
        <div className="header-actions">
          <button
            className="menu-button"
            type="button"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-inner">
        <div>
          <Logo />
          <p>
            Сайты, боты, приложения
            <br />
            и системы учёта для бизнеса.
          </p>
        </div>
        <nav className="footer-links" aria-label="Навигация в подвале">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-contacts">
          <a href={buildContactLink('telegram')} target="_blank" rel="noopener noreferrer">
            Telegram @{site.telegram}
          </a>
          <a href={buildContactLink('whatsapp')} target="_blank" rel="noopener noreferrer">
            WhatsApp {site.phone}
          </a>
          <a href={buildContactLink('channel')} target="_blank" rel="noopener noreferrer">
            ТГК @{site.channel}
          </a>
          <small>© {new Date().getFullYear()} gwencode</small>
        </div>
      </div>
    </footer>
  )
}

export function MobileBar() {
  return (
    <div className="mobile-bar">
      <a href={buildContactLink('telegram')} target="_blank" rel="noopener noreferrer">
        <Send size={17} aria-hidden />
        Telegram
      </a>
      <a href={buildContactLink('whatsapp')} target="_blank" rel="noopener noreferrer">
        <MessageCircle size={17} aria-hidden />
        WhatsApp
      </a>
    </div>
  )
}

export function ContactButton({
  channel = 'telegram',
  children,
  className = 'button button-primary',
  message,
}: {
  channel?: 'telegram' | 'whatsapp' | 'phone'
  children: React.ReactNode
  className?: string
  message?: string
}) {
  const Icon = channel === 'phone' ? Phone : channel === 'whatsapp' ? MessageCircle : Send
  const external = channel === 'telegram' || channel === 'whatsapp'
  return (
    <a
      className={className}
      href={buildContactLink(channel, message)}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <Icon size={18} aria-hidden />
      {children}
    </a>
  )
}
