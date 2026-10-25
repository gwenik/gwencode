'use client'

import { useEffect, useRef } from 'react'

const PHRASE = '50+ проектов · с 2018 · ВайСклад · 100 человек · '
/** Дублируем фразу — цикл идёт на половину длины текста, без рывка */
const TEXT = `${PHRASE}${PHRASE}`

export function OfferArc() {
  const textRef = useRef<SVGTextElement>(null)
  const pathRef = useRef<SVGTextPathElement>(null)

  useEffect(() => {
    const text = textRef.current
    const path = pathRef.current
    if (!text || !path) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduced.matches) {
      path.setAttribute('startOffset', '0')
      return
    }

    let half = 0
    let offset = 0
    let last = performance.now()
    let frame = 0
    const speed = 36

    const measure = () => {
      half = text.getComputedTextLength() / 2
    }

    measure()
    // после шрифтов длина может чуть измениться
    document.fonts?.ready?.then(measure).catch(() => {})

    const tick = (now: number) => {
      const dt = Math.min(48, now - last) / 1000
      last = now
      if (half > 1) {
        offset = (offset + speed * dt) % half
        path.setAttribute('startOffset', String(-offset))
      }
      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)
    window.addEventListener('resize', measure)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <svg className="offer-arc" viewBox="0 0 170 240" aria-hidden="true">
      <defs>
        <path id="offer-arc-path" d="M6 28 Q 152 16 160 228" />
      </defs>
      <text ref={textRef}>
        <textPath ref={pathRef} href="#offer-arc-path" xlinkHref="#offer-arc-path" startOffset="0">
          {TEXT}
        </textPath>
      </text>
    </svg>
  )
}
