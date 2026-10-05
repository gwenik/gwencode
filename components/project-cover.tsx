import type { Project } from '@/lib/content'

export function ProjectCover({
  project,
  className = '',
  eager = false,
}: {
  project: Project
  className?: string
  eager?: boolean
}) {
  const screenshot = 'screenshot' in project ? project.screenshot : undefined
  const logo = 'logo' in project ? project.logo : undefined
  const loading = eager ? 'eager' : 'lazy'

  if (logo) {
    return (
      <div className={`cover cover-${project.slug} cover-logo ${className}`}>
        <img src={logo} alt={`Логотип ${project.title}`} width={512} height={512} loading={loading} decoding="async" />
      </div>
    )
  }

  return (
    <div className={`cover cover-${project.slug} ${className}`}>
      <div className={screenshot ? 'cover-window has-shot' : 'cover-window'}>
        <span /><span /><span />
        {screenshot ? (
          <img
            src={screenshot}
            alt={`Скриншот сайта ${project.title}`}
            width={1600}
            height={830}
            loading={loading}
            decoding="async"
          />
        ) : (
          <div className="fake-ui">
            <b>{project.title}</b>
            <i /><i /><i />
          </div>
        )}
      </div>
    </div>
  )
}
