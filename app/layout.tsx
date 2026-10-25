import type { Metadata } from 'next'
import { AnalyticsLoader, CookieConsent } from '@/components/cookie-consent'
import { MobileBar, SiteFooter, SiteHeader } from '@/components/site-chrome'
import { SeoJsonLd } from '@/components/seo-json-ld'
import { site } from '@/lib/content'
import './globals.css'

const titleDefault = 'IT-компания в Грозном — сайты, боты, приложения | gwencode'
const description =
  'IT-команда gwencode в Грозном: разработка сайтов, Telegram-ботов, мобильных приложений, интернет-магазинов и систем учёта. Работаем по Чечне и всей России. Консультация и аудит — бесплатно.'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: titleDefault,
    template: '%s — gwencode',
  },
  description,
  applicationName: 'gwencode',
  authors: [{ name: 'gwencode', url: site.url }],
  creator: 'gwencode',
  publisher: 'gwencode',
  category: 'technology',
  keywords: [
    'IT компания Грозный',
    'IT команда Грозный',
    'разработка сайтов Грозный',
    'веб студия Чечня',
    'заказать сайт Грозный',
    'Telegram бот разработка',
    'мобильное приложение Грозный',
    'интернет магазин под ключ',
    'CRM система учёта',
    'gwencode',
    'айти компания Чеченская Республика',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'ru-RU': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: site.url,
    siteName: 'gwencode',
    title: titleDefault,
    description,
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'gwencode — IT-компания в Грозном',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: titleDefault,
    description,
    images: ['/icon-512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    ...(site.googleVerification ? { google: site.googleVerification } : {}),
    ...(site.yandexVerification ? { yandex: site.yandexVerification } : {}),
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon-32x32.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'format-detection': 'telephone=yes',
    'yandex-tableau-widget': JSON.stringify({
      color: '#d2f26a',
      logo: 'icon-192.png',
    }),
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light' as const,
  themeColor: '#fcfafa',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <link rel="dns-prefetch" href="https://mc.yandex.ru" />
        <link rel="dns-prefetch" href="https://t.me" />
      </head>
      <body>
        <SeoJsonLd />
        <SiteHeader />
        <div id="content">{children}</div>
        <SiteFooter />
        <MobileBar />
        <CookieConsent />
        <AnalyticsLoader />
      </body>
    </html>
  )
}
