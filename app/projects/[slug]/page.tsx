import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check, ExternalLink } from 'lucide-react'
import { ProjectCover } from '@/components/project-cover'
import { ContactButton } from '@/components/site-chrome'
import { projects } from '@/lib/content'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) return { title: 'Проект не найден' }
  return { title: project.title, description: project.short }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const index = projects.findIndex((item) => item.slug === slug)
  const project = projects[index]
  if (!project) notFound()

  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const message = `Здравствуйте! Интересует проект, похожий на ${project.title}.`
  const screenshot = 'screenshot' in project ? project.screenshot : undefined

  return (
    <main className="project-detail container">
      <div className="breadcrumbs">
        <a href="/">Главная</a>
        <span aria-hidden>/</span>
        <a href="/projects/">Проекты</a>
        <span aria-hidden>/</span>
        <b>{project.title}</b>
      </div>

      <div className="detail-hero">
        <div>
          <div className="badges">
            <span>{project.category}</span>
            {project.own ? <span>Наш продукт</span> : null}
            {'status' in project && project.status ? <span>{project.status}</span> : null}
          </div>
          <h1>{project.title}</h1>
          <p>{project.short}</p>
          <div className="detail-buttons">
            {project.url ? (
              <a className="button button-secondary" href={project.url} target="_blank" rel="noopener noreferrer">
                Открыть сайт <ExternalLink size={17} aria-hidden />
              </a>
            ) : null}
            <ContactButton message={message}>Хочу похожий</ContactButton>
          </div>
        </div>
        <ProjectCover project={project} className="detail-cover" eager />
      </div>

      <div className="detail-facts">
        <div>
          <small>Тип</small>
          <b>{project.category}</b>
        </div>
        <div>
          <small>Срок</small>
          <b>{project.duration}</b>
        </div>
        <div>
          <small>Год</small>
          <b>{project.year}</b>
        </div>
        <div>
          <small>Платформы</small>
          <b>{project.platforms.join(' · ')}</b>
        </div>
      </div>

      <div className="detail-body">
        <article>
          <p className="eyebrow">Задача</p>
          <h2>Что нужно было решить</h2>
          <p>{project.task}</p>

          <p className="eyebrow" style={{ marginTop: 48 }}>Что сделали</p>
          <h2>Как подошли к работе</h2>
          <p>{project.work}</p>

          <p className="eyebrow" style={{ marginTop: 48 }}>Скриншоты</p>
          <h2>Как это выглядит</h2>
          {screenshot ? (
            <a
              className="shot-full"
              href={screenshot}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Открыть скриншот ${project.title} в полном размере`}
            >
              <img
                src={screenshot}
                alt={`Главная страница ${project.title}`}
                width={1600}
                height={830}
                loading="lazy"
                decoding="async"
              />
            </a>
          ) : (
            <div className="screenshots">
              <div className="shot-stub">Скриншот скоро</div>
              <div className="shot-stub">Скриншот скоро</div>
              <div className="shot-stub">Скриншот скоро</div>
            </div>
          )}
        </article>

        <aside>
          <p className="eyebrow">Возможности</p>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>
                <Check size={18} aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
          {'results' in project && project.results ? (
            <div className="tech-box">
              <small>Результат</small>
              <span>{project.results.join(' · ')}</span>
            </div>
          ) : null}
          <div className="tech-box">
            <small>Технологии</small>
            <span>{project.stack.length ? project.stack.join(', ') : '{{ТЕХНОЛОГИИ}}'}</span>
          </div>
          <div className="tech-box">
            <small>Клиент</small>
            <span>{project.client}</span>
          </div>
          <ContactButton message={message}>Хочу похожий</ContactButton>
        </aside>
      </div>

      <div className="detail-nav">
        <a className="button button-secondary" href={`/projects/${prev.slug}/`}>
          <ArrowLeft size={16} aria-hidden /> {prev.title}
        </a>
        <a className="button button-secondary" href={`/projects/${next.slug}/`}>
          {next.title} <ArrowRight size={16} aria-hidden />
        </a>
      </div>
    </main>
  )
}
