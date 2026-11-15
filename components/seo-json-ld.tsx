import { faq, site } from '@/lib/content'
import { legal } from '@/lib/legal'

export function SeoJsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: legal.operatorName,
    url: site.url,
    logo: `${site.url}/icon-512.png`,
    image: `${site.url}/icon-512.png`,
    description:
      'GwenCode — IT-компания в Грозном: сайты, Telegram-боты, интернет-магазины, приложения и учёт для бизнеса. Работаем по Чечне и всей России. Консультация бесплатно.',
    telephone: legal.contactPhone,
    email: legal.contactEmail,
    taxID: legal.inn,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. У.А.Садаева, д. 19, офис 2',
      postalCode: '364060',
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: 'RU',
    },
    areaServed: [
      { '@type': 'City', name: 'Грозный' },
      { '@type': 'AdministrativeArea', name: 'Чеченская Республика' },
      { '@type': 'Country', name: 'Россия' },
    ],
    sameAs: [`https://t.me/${site.channel}`, `https://t.me/${site.telegram}`],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        availableLanguage: ['Russian'],
        telephone: legal.contactPhone,
        url: `https://t.me/${site.telegram}`,
      },
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: 'ru-RU',
    publisher: { '@id': `${site.url}/#organization` },
    potentialAction: {
      '@type': 'CommunicateAction',
      name: 'Написать в Telegram',
      target: `https://t.me/${site.telegram}`,
    },
  }

  const services = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Услуги GwenCode',
    itemListElement: [
      'Разработка сайтов в Грозном',
      'Telegram и WhatsApp боты',
      'Интернет-магазины',
      'Мобильные приложения',
      'CRM и системы учёта',
      'Доработка IT-проектов',
    ].map((name, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
    })),
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  )
}
