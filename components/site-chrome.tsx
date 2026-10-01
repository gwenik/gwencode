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

export function Logo() {
  return (
    <a href="/" className="logo" aria-label="gwensoft — на главную">
      gwen<span>soft</span>
      <i />
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
          <small>
            © {new Date().getFullYear()} gwensoft
            <br />
            {site.legal}
          </small>
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
