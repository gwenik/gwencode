'use client'

import { useEffect, useState, type CSSProperties } from 'react'
import { usePathname } from 'next/navigation'

const steps = [
  { href: '/', match: 'home', label: 'GwenCode', home: true },
  { href: '/about/', match: '/about', label: 'Кто мы' },
  { href: '/projects/', match: '/projects', label: 'Заказы' },
  { href: '/products/', match: '/products', label: 'Наши продукты' },
] as const

function isActiveStep(pathname: string, match: string) {
  if (match === 'home') {
    return pathname === '/' || pathname === ''
  }
  return pathname.startsWith(match)
}

export function StepRail() {
  const pathname = usePathname()
  const [intro, setIntro] = useState(true)

  // Не мешаем юридическим страницам и детальным кейсам — там другой фокус
  const hidden =
    pathname.startsWith('/legal') ||
    (pathname.startsWith('/projects/') && pathname !== '/projects/')

  useEffect(() => {
    if (hidden) return
    setIntro(true)
    const timer = window.setTimeout(() => setIntro(false), 2800)
    return () => window.clearTimeout(timer)
  }, [pathname, hidden])

  if (hidden) return null

  return (
    <nav
      className={intro ? 'step-rail is-visible is-intro' : 'step-rail is-visible'}
      aria-label="Разделы сайта"
    >
      <div className="step-rail-track" aria-hidden="true" />
      {steps.map((step, index) => {
        const isActive = isActiveStep(pathname, step.match)
        const isHome = 'home' in step && step.home
        return (
          <a
            key={step.href}
            href={step.href}
            className={[
              'step-rail-item',
              isHome ? 'step-rail-home' : '',
              isActive ? 'is-active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{ '--rail-i': index } as CSSProperties}
            aria-current={isActive ? 'page' : undefined}
            aria-label={isHome ? 'GwenCode — на главную' : undefined}
          >
            <span className="step-rail-label">{step.label}</span>
            {isHome ? (
              <span className="step-rail-dot step-rail-logo">
                <img src="/logo-mark.png" alt="" width={18} height={18} decoding="async" />
              </span>
            ) : (
              <span className="step-rail-dot">{index}</span>
            )}
          </a>
        )
      })}
    </nav>
  )
}
