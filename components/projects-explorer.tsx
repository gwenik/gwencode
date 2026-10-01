'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { ContactButton } from '@/components/site-chrome'
import { projects } from '@/lib/content'

function Cover({ slug, title }: { slug: string; title: string }) {
  return (
    <div className={`cover cover-${slug}`}>
      <div className="cover-window">
        <span /><span /><span />
        <div className="fake-ui">
          <b>{title}</b>
          <i /><i /><i />
        </div>
      </div>
    </div>
  )
}

export function ProjectsExplorer() {
  const [filter, setFilter] = useState('Все')
  const categories = useMemo(
    () => ['Все', ...Array.from(new Set(projects.map((project) => project.category)))],
    [],
  )
  const visible = useMemo(
    () =>
      (filter === 'Все' ? projects : projects.filter((project) => project.category === filter)).slice().sort((a, b) => a.order - b.order),
    [filter],
  )

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const cat = params.get('cat')
    if (cat && categories.includes(cat)) setFilter(cat)
  }, [categories])

  function select(category: string) {
    setFilter(category)
    const url = new URL(window.location.href)
    if (category === 'Все') url.searchParams.delete('cat')
    else url.searchParams.set('cat', category)
    window.history.replaceState({}, '', url)
  }

  return (
    <main className="projects-page container">
      <p className="eyebrow">Портфолио gwensoft</p>
      <h1>Наши проекты</h1>
      <p className="projects-lead">
        Магазины, доставка, системы учёта и сайты. Нажмите на проект — расскажем, что сделали и сколько это заняло.
      </p>
      <div className="filters" role="tablist" aria-label="Категории проектов">
        {categories.map((category) => {
          const count =
            category === 'Все'
              ? projects.length
              : projects.filter((project) => project.category === category).length
          return (
            <button
              key={category}
              type="button"
              className={filter === category ? 'selected' : ''}
              aria-pressed={filter === category}
              onClick={() => select(category)}
            >
              {category} <span>{count}</span>
            </button>
          )
        })}
      </div>
      <div className="projects-grid">
        {visible.map((project) => (
          <a className="project-card" href={`/projects/${project.slug}/`} key={project.slug}>
            <Cover slug={project.slug} title={project.title} />
            <div className="project-card-body">
              <div className="badges">
                {project.own ? <span>Наш продукт</span> : null}
                {'status' in project && project.status ? <span>{project.status}</span> : null}
                {project.platforms
                  .filter((platform) => platform !== 'Сайт')
                  .map((platform) => (
                    <span key={platform}>{platform}</span>
                  ))}
              </div>
              <h2>{project.title}</h2>
              <p>{project.short}</p>
              <small>
                {project.category} · срок: {project.duration} · {project.year}
              </small>
              <ArrowRight className="card-arrow" size={20} aria-hidden />
            </div>
          </a>
        ))}
      </div>
      <section className="projects-cta">
        <div>
          <p className="eyebrow">Похожий проект?</p>
          <h2>Расскажите, что нужно вашему бизнесу</h2>
        </div>
        <ContactButton>Написать в Telegram</ContactButton>
      </section>
    </main>
  )
}
