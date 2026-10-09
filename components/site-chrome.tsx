'use client'

import { useEffect, useState, type SVGProps } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { buildContactLink, site } from '@/lib/content'

const nav = [
  { href: '/#about', label: 'Кто мы' },
  { href: '/#audiences', label: 'Что решаем' },
  { href: '/projects/', label: 'Проекты' },
  { href: '/#contact', label: 'Связаться' },
]

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

/** Фирменные силуэты на currentColor — без синего/зелёного бренда, под палитру сайта */
export function TelegramIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 6.75-1.48 7c-.1.47-.4.58-.8.36l-2.22-1.64-1.07 1.03c-.12.12-.22.22-.45.22l.16-2.27 4.14-3.74c.18-.16-.04-.25-.28-.09l-5.12 3.22-2.2-.69c-.48-.15-.49-.48.1-.71l8.6-3.31c.4-.15.75.1.72.58Z" />
    </svg>
  )
}

export function WhatsAppIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.76.46 3.47 1.34 4.98L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.23h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.53 3.69-8.21 8.23-8.21 4.53 0 8.21 3.68 8.21 8.21 0 4.54-3.68 8.24-8.2 8.24Zm4.52-6.15c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.17.21-.58.21-1.07.14-1.17-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  )
}

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
            <TelegramIcon size={15} />
            Telegram @{site.telegram}
          </a>
          <a href={buildContactLink('whatsapp')} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={15} />
            WhatsApp {site.phone}
          </a>
          <a href={buildContactLink('channel')} target="_blank" rel="noopener noreferrer">
            <TelegramIcon size={15} />
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
        <TelegramIcon size={18} />
        Telegram
      </a>
      <a href={buildContactLink('whatsapp')} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon size={18} />
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
  const Icon =
    channel === 'phone' ? Phone : channel === 'whatsapp' ? WhatsAppIcon : TelegramIcon
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
