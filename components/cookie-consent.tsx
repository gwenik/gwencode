'use client'

import { useEffect, useState } from 'react'
import { site } from '@/lib/content'
import { CONSENT_STORAGE_KEY, type CookieConsentState } from '@/lib/legal'

declare global {
  interface Window {
    ym?: (id: string | number, method: string, options?: Record<string, unknown>) => void
    __gwencodeMetrikaLoaded?: boolean
  }
}

function readConsent(): CookieConsentState | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as CookieConsentState
  } catch {
    return null
  }
}

function writeConsent(analytics: boolean) {
  const state: CookieConsentState = {
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  }
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state))
  window.dispatchEvent(new CustomEvent('gwencode-consent', { detail: state }))
  return state
}

function loadYandexMetrika(id: string) {
  if (!id || typeof window === 'undefined' || window.__gwencodeMetrikaLoaded) return
  window.__gwencodeMetrikaLoaded = true

  const existing = document.querySelector<HTMLScriptElement>('script[data-gwencode-metrika]')
  if (!existing) {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://mc.yandex.ru/metrika/tag.js'
    script.dataset.gwencodeMetrika = '1'
    document.head.appendChild(script)
  }

  const init = () => {
    window.ym?.(id, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    })
  }

  // ym появляется после загрузки tag.js; очередь через заглушку
  type YmStub = ((...args: unknown[]) => void) & { a?: unknown[][]; l?: number }
  if (!window.ym) {
    const stub: YmStub = (...args: unknown[]) => {
      stub.a = stub.a || []
      stub.a.push(args)
    }
    stub.l = Date.now()
    window.ym = stub as unknown as Window['ym']
  }
  init()
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const existing = readConsent()
    if (!existing) {
      setVisible(true)
      return
    }
    if (existing.analytics && site.metrikaId) {
      loadYandexMetrika(site.metrikaId)
    }
  }, [])

  function acceptAll() {
    writeConsent(true)
    if (site.metrikaId) loadYandexMetrika(site.metrikaId)
    setVisible(false)
  }

  function acceptNecessary() {
    writeConsent(false)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-labelledby="cookie-banner-title" aria-live="polite">
      <div className="cookie-banner-inner">
        <div>
          <p id="cookie-banner-title" className="cookie-banner-title">
            Мы используем cookies
          </p>
          <p className="cookie-banner-text">
            Нужные cookies помогают сайту работать. Аналитические (Яндекс.Метрика) включаем только с вашего согласия —
            чтобы понимать, как пользуются сайтом. Подробнее — в <a href="/legal/cookies/">политике cookies</a> и{' '}
            <a href="/legal/privacy/">политике конфиденциальности</a>.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button type="button" className="button button-secondary" onClick={acceptNecessary}>
            Только необходимые
          </button>
          <button type="button" className="button button-primary" onClick={acceptAll}>
            Принять все
          </button>
        </div>
      </div>
    </div>
  )
}

/** Подключает Метрику, если согласие уже было сохранено ранее */
export function AnalyticsLoader() {
  useEffect(() => {
    const consent = readConsent()
    if (consent?.analytics && site.metrikaId) {
      loadYandexMetrika(site.metrikaId)
    }
  }, [])
  return null
}
