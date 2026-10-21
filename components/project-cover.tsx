import type { Project } from '@/lib/content'

function imageVariants(src: string) {
  const match = src.match(/^(.*)\.(jpe?g|png)$/i)
  if (!match) return null
  const [, base, ext] = match
  const isPng = ext.toLowerCase() === 'png'
  return {
    webp: `${base}.webp`,
    webp800: isPng ? null : `${base}-800.webp`,
    webp1200: isPng ? null : `${base}-1200.webp`,
    jpg800: isPng ? null : `${base}-800.jpg`,
    jpg1200: isPng ? null : `${base}-1200.jpg`,
    fallback: src,
  }
}

export function ProjectCover({
  project,
  className = '',
  eager = false,
  sizes = '(max-width: 640px) 92vw, (max-width: 980px) 45vw, 380px',
}: {
  project: Project
  className?: string
  eager?: boolean
  sizes?: string
}) {
  const screenshot = 'screenshot' in project ? project.screenshot : undefined
  const logo = 'logo' in project ? project.logo : undefined
  const loading = eager ? 'eager' : 'lazy'
  const fetchPriority = eager ? 'high' : 'low'

  if (logo) {
    const variants = imageVariants(logo)
    return (
      <div className={`cover cover-${project.slug} cover-logo ${className}`}>
        <picture>
          {variants ? <source type="image/webp" srcSet={variants.webp} /> : null}
          <img
            src={logo}
            alt={`Логотип ${project.title}`}
            width={512}
            height={512}
            loading={loading}
            decoding="async"
            fetchPriority={fetchPriority}
            sizes={sizes}
          />
        </picture>
      </div>
    )
  }

  const variants = screenshot ? imageVariants(screenshot) : null

  return (
    <div className={`cover cover-${project.slug} ${className}`}>
      <div className={screenshot ? 'cover-window has-shot' : 'cover-window'}>
        <span />
        <span />
        <span />
        {screenshot && variants ? (
          <picture>
            <source
              type="image/webp"
              srcSet={[
                variants.webp800 ? `${variants.webp800} 800w` : null,
                variants.webp1200 ? `${variants.webp1200} 1200w` : null,
                `${variants.webp} 1600w`,
              ]
                .filter(Boolean)
                .join(', ')}
              sizes={sizes}
            />
            <source
              type="image/jpeg"
              srcSet={[
                variants.jpg800 ? `${variants.jpg800} 800w` : null,
                variants.jpg1200 ? `${variants.jpg1200} 1200w` : null,
                `${variants.fallback} 1600w`,
              ]
                .filter(Boolean)
                .join(', ')}
              sizes={sizes}
            />
            <img
              src={variants.jpg800 || variants.fallback}
              alt={`Скриншот сайта ${project.title}`}
              width={1600}
              height={830}
              loading={loading}
              decoding="async"
              fetchPriority={fetchPriority}
              sizes={sizes}
            />
          </picture>
        ) : (
          <div className="fake-ui">
            <b>{project.title}</b>
            <i />
            <i />
            <i />
          </div>
        )}
      </div>
    </div>
  )
}

export function ProjectShot({
  src,
  title,
  eager = false,
}: {
  src: string
  title: string
  eager?: boolean
}) {
  const variants = imageVariants(src)
  const loading = eager ? 'eager' : 'lazy'
  if (!variants) {
    return (
      <img
        src={src}
        alt={`Главная страница ${title}`}
        width={1600}
        height={830}
        loading={loading}
        decoding="async"
      />
    )
  }
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={[
          variants.webp800 ? `${variants.webp800} 800w` : null,
          variants.webp1200 ? `${variants.webp1200} 1200w` : null,
          `${variants.webp} 1600w`,
        ]
          .filter(Boolean)
          .join(', ')}
        sizes="(max-width: 980px) 94vw, 720px"
      />
      <img
        src={variants.jpg1200 || variants.fallback}
        alt={`Главная страница ${title}`}
        width={1600}
        height={830}
        loading={loading}
        decoding="async"
        fetchPriority="low"
        sizes="(max-width: 980px) 94vw, 720px"
      />
    </picture>
  )
}
