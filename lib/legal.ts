import { site } from '@/lib/content'

/** Юр. данные оператора — поправь под свои реквизиты перед продом */
export const legal = {
  brand: site.name,
  siteUrl: site.url,
  /** Оператор ПДн / владелец сайта */
  operatorName: 'ООО «ПАРТНЕР»',
  operatorShort: 'ООО «ПАРТНЕР» (бренд gwencode)',
  inn: '{{ИНН}}',
  ogrn: '{{ОГРН}}',
  legalAddress: '{{ЮРИДИЧЕСКИЙ_АДРЕС}}, г. Грозный, Чеченская Республика, РФ',
  /** Почта для запросов по 152-ФЗ — лучше завести отдельный ящик */
  privacyEmail: '',
  contactTelegram: `@${site.telegram}`,
  contactPhone: site.phone,
  /** Дата актуальной редакции документов */
  docsUpdated: '21.10.2026',
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
  if (legal.privacyEmail) return legal.privacyEmail
  return `Telegram ${legal.contactTelegram} или WhatsApp ${legal.contactPhone}`
}
