import { site } from '@/lib/content'

export function SeoJsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: 'gwencode',
    url: site.url,
    logo: `${site.url}/icon-512.png`,
    image: `${site.url}/icon-512.png`,
    description:
      'IT-компания и команда разработчиков в Грозном: сайты, Telegram-боты, мобильные приложения, интернет-магазины и системы учёта для бизнеса по Чечне и всей России.',
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
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
        telephone: site.phone,
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
    name: 'Услуги gwencode',
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }} />
    </>
  )
}

export function YandexMetrika() {
  if (!site.metrikaId) return null
  const id = site.metrikaId
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(${JSON.stringify(id)}, "init", {clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true});
`,
        }}
      />
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${id}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  )
}
