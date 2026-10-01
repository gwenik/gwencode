import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { MobileBar, SiteFooter, SiteHeader } from '@/components/site-chrome'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://gwensoft.ru'),
  title: {
    default: 'gwensoft — сайты, боты, приложения и автоматизация для бизнеса',
    template: '%s — gwensoft',
  },
  description:
    'Делаем сайты, Telegram-ботов, мобильные приложения и системы учёта для магазинов, оптовиков, школ и экспертов. Грозный и вся Россия. Консультация и аудит — бесплатно.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#fcfafa',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <a className="skip" href="#content">
          К содержанию
        </a>
        <SiteHeader />
        <div id="content">{children}</div>
        <SiteFooter />
        <MobileBar />
        {process.env.NODE_ENV === 'production' ? <Analytics /> : null}
      </body>
    </html>
  )
}
