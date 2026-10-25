import { site } from '@/lib/content'

/** Юр. данные оператора и правообладателя бренда */
export const legal = {
  brand: site.name,
  siteUrl: site.url,
  operatorName: 'ООО «ПАРТНЕР»',
  operatorShort: 'ООО «ПАРТНЕР» (бренд gwencode)',
  inn: '2014015498',
  kpp: '201401001',
  ogrn: '1172036002940',
  legalAddress: '364060, Чеченская Республика, город Грозный, ул. У.А.Садаева, д. 19, офис 2',
  privacyEmail: 'g-companyit@mail.ru',
  contactEmail: 'g-companyit@mail.ru',
  contactPhone: '+7 (963) 594-71-63',
  contactPhoneTel: 'tel:+79635947163',
  contactTelegram: `@${site.telegram}`,
  workHours: 'Пн–Пт 9:00–18:00',
  sinceYear: '2017',
  docsUpdated: '25.10.2026',
  city: site.city,
  region: site.region,
}

export const legalNav = [
  { href: '/legal/privacy/', label: 'Конфиденциальность' },
  { href: '/legal/terms/', label: 'Соглашение' },
  { href: '/legal/cookies/', label: 'Файлы cookie' },
] as const

export const CONSENT_STORAGE_KEY = 'gwencode-cookie-consent'

export type CookieConsentState = {
  necessary: true
  analytics: boolean
  updatedAt: string
}

export function contactForPrivacy() {
  return legal.privacyEmail || `Telegram ${legal.contactTelegram} или телефон ${legal.contactPhone}`
}
