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
    'Делаем сайты, Telegram-ботов, мобильные приложения и системы учёта для магазинов, оптовиков, школ и экспертов. Чечня и вся Россия. Консультация и аудит — бесплатно.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/icon.svg',
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
