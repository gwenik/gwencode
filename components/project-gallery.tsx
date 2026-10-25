'use client'

import { useCallback, useEffect, useId, useRef, useState, type TouchEvent } from 'react'

export type GalleryShot = {
  src: string
  alt: string
  label: string
}

function thumbSrc(src: string) {
  const match = src.match(/^(.*)\.(jpe?g|png)$/i)
  if (!match) return src
  const [, base, ext] = match
  if (ext.toLowerCase() === 'png') return `${base}.webp`
  return `${base}-800.webp`
}

function fullSrc(src: string) {
  const match = src.match(/^(.*)\.(jpe?g|png)$/i)
  if (!match) return src
  const [, base, ext] = match
  if (ext.toLowerCase() === 'png') return src
  return `${base}.jpg`
}

export function ProjectGallery({
  shots,
  initialIndex = 0,
}: {
  shots: GalleryShot[]
  initialIndex?: number
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const touchX = useRef<number | null>(null)
  const labelId = useId()
  const [index, setIndex] = useState(() =>
    shots.length ? Math.min(Math.max(initialIndex, 0), shots.length - 1) : 0,
  )
  const [open, setOpen] = useState(false)
  const many = shots.length > 1
  const current = shots[index]

  const show = useCallback(
    (next: number) => {
      if (!shots.length) return
      setIndex((next + shots.length) % shots.length)
    },
    [shots.length],
  )

  const openLightbox = useCallback(() => {
    const dialog = dialogRef.current
    if (!dialog || !current) return
    setOpen(true)
    document.body.classList.add('lightbox-open')
    if (!dialog.open) dialog.showModal()
    window.requestAnimationFrame(() => {
      dialog.querySelector<HTMLButtonElement>('.shot-lightbox-close')?.focus()
    })
  }, [current])

  const closeLightbox = useCallback(() => {
    const dialog = dialogRef.current
    if (dialog?.open) dialog.close()
    document.body.classList.remove('lightbox-open')
    setOpen(false)
  }, [])

  useEffect(() => {
    return () => document.body.classList.remove('lightbox-open')
  }, [])

  useEffect(() => {
    if (!open || !many) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        show(index + 1)
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        show(index - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, many, index, show])

  if (!shots.length || !current) {
    return (
      <div className="screenshots">
        <div className="shot-stub">Скриншот скоро</div>
        <div className="shot-stub">Скриншот скоро</div>
        <div className="shot-stub">Скриншот скоро</div>
      </div>
    )
  }

  const onTouchStart = (event: TouchEvent) => {
    if (!many) return
    touchX.current = event.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (event: TouchEvent) => {
    if (!many || touchX.current == null) return
    const x = event.changedTouches[0]?.clientX
    if (x == null) return
    const delta = x - touchX.current
    touchX.current = null
    if (Math.abs(delta) < 48) return
    show(delta < 0 ? index + 1 : index - 1)
  }

  return (
    <div className="shot-gallery" data-count={shots.length}>
      <div className="shot-gallery-stage">
        {many ? (
          <button
            className="shot-gallery-nav shot-gallery-nav-prev"
            type="button"
            aria-label="Предыдущее фото"
            onClick={() => show(index - 1)}
          />
        ) : null}
        <button
          className="shot-gallery-slide"
          type="button"
          aria-label={`Открыть фото «${current.label}» в полном размере`}
          onClick={openLightbox}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <img src={thumbSrc(current.src)} alt={current.alt} width={1600} height={830} decoding="async" />
          <span className="shot-zoom-hint" aria-hidden="true" />
        </button>
        {many ? (
          <button
            className="shot-gallery-nav shot-gallery-nav-next"
            type="button"
            aria-label="Следующее фото"
            onClick={() => show(index + 1)}
          />
        ) : null}
      </div>

      {many ? (
        <div className="shot-gallery-meta">
          <p className="shot-gallery-label" id={labelId}>
            {current.label}
          </p>
          <p className="shot-gallery-count">
            <span>{index + 1}</span> / {shots.length}
          </p>
        </div>
      ) : null}

      {many ? (
        <div className="shot-gallery-thumbs" role="tablist" aria-label="Скриншоты проекта">
          {shots.map((shot, i) => (
            <button
              key={`${shot.src}-${shot.label}`}
              className="shot-gallery-thumb"
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={shot.label}
              onClick={() => setIndex(i)}
            >
              <img src={thumbSrc(shot.src)} alt="" width={400} height={250} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      ) : null}

      <dialog
        ref={dialogRef}
        className="shot-lightbox"
        aria-label="Просмотр фото"
        onClose={closeLightbox}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeLightbox()
        }}
      >
        <button className="shot-lightbox-close" type="button" aria-label="Закрыть" onClick={closeLightbox} />
        {many ? (
          <button
            className="shot-lightbox-nav shot-lightbox-nav-prev"
            type="button"
            aria-label="Предыдущее фото"
            onClick={(event) => {
              event.stopPropagation()
              show(index - 1)
            }}
          />
        ) : null}
        <img
          src={fullSrc(current.src)}
          alt={current.alt}
          onClick={closeLightbox}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        />
        {many ? (
          <button
            className="shot-lightbox-nav shot-lightbox-nav-next"
            type="button"
            aria-label="Следующее фото"
            onClick={(event) => {
              event.stopPropagation()
              show(index + 1)
            }}
          />
        ) : null}
        {many ? (
          <p className="shot-lightbox-meta">
            {current.label}
            <span>
              {index + 1} / {shots.length}
            </span>
          </p>
        ) : null}
      </dialog>
    </div>
  )
}
