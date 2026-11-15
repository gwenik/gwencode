'use client'

import { useEffect, useState, type SVGProps } from 'react'
import { usePathname } from 'next/navigation'
import { FolderKanban, MessageCircle, Phone, Sparkles, Users } from 'lucide-react'
import { buildContactLink, site } from '@/lib/content'
import { legalNav } from '@/lib/legal'

const nav = [
  { href: '/#about', label: 'Кто мы' },
  { href: '/#audiences', label: 'Что решаем' },
  { href: '/projects/', label: 'Заказы' },
  { href: '/#contact', label: 'Контакты' },
  { href: '/products/', label: 'Наши продукты', paddle: true },
] as const

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

/** Оригинальный логотип Telegram (цвет — currentColor) */
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
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

/** Оригинальный логотип WhatsApp (цвет — currentColor) */
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
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

export function Logo() {
  return (
    <a href="/" className="logo" aria-label="GwenCode — на главную">
      <img
        className="logo-img"
        src="/logo-lockup.png"
        srcSet="/logo-lockup.png 1x, /logo-lockup@2x.png 2x, /logo-lockup@3x.png 3x"
        alt="GwenCode"
        width={174}
        height={40}
        decoding="async"
      />
    </a>
  )
}

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <nav aria-label="Главная навигация">
          {nav.map((item) => {
            const isActive =
              item.href === '/products/'
                ? pathname.startsWith('/products')
                : item.href === '/projects/'
                  ? pathname.startsWith('/projects')
                  : false
            return (
              <a
                key={item.href}
                href={item.href}
                className={[
                  'paddle' in item && item.paddle ? 'nav-paddle' : '',
                  isActive ? 'is-active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            )
          })}
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
          <nav className="footer-legal" aria-label="Юридические документы">
            {legalNav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <small>© {new Date().getFullYear()} GwenCode</small>
        </div>
      </div>
    </footer>
  )
}

const tabs = [
  { href: '/#about', match: 'about', label: 'Кто мы', icon: Users },
  { href: '/#audiences', match: 'audiences', label: 'Что решаем', icon: Sparkles },
  { href: '/#contact', match: 'contact', label: 'Контакты', icon: MessageCircle },
  { href: '/projects/', match: 'projects', label: 'Заказы', icon: FolderKanban },
] as const

export function MobileBar() {
  const pathname = usePathname()
  const [section, setSection] = useState('about')

  useEffect(() => {
    if (pathname !== '/') return
    const markers = [
      { id: 'about', match: 'about' },
      { id: 'audiences', match: 'audiences' },
      { id: 'services', match: 'audiences' },
      { id: 'contact', match: 'contact' },
    ]
    let frame = 0
    const update = () => {
      frame = 0
      const line = window.scrollY + 160
      let current = 'about'
      for (const marker of markers) {
        const node = document.getElementById(marker.id)
        if (!node) continue
        const top = node.getBoundingClientRect().top + window.scrollY
        if (top <= line) current = marker.match
      }
      setSection(current)
    }
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [pathname])

  const active = pathname.startsWith('/projects')
    ? 'projects'
    : pathname.startsWith('/products')
      ? 'products'
      : pathname === '/'
        ? section
        : ''

  return (
    <nav className="app-tabbar" aria-label="Разделы сайта">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = active === tab.match
        return (
          <a key={tab.href} href={tab.href} className={isActive ? 'is-active' : ''} aria-current={isActive ? 'page' : undefined}>
            <Icon size={20} aria-hidden />
            <span>{tab.label}</span>
          </a>
        )
      })}
    </nav>
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
