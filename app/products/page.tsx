import type { Metadata } from 'next'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { ProjectCover } from '@/components/project-cover'
import { ContactButton } from '@/components/site-chrome'
import { ownProducts, projects, site, type OwnProduct } from '@/lib/content'

export const metadata: Metadata = {
  title: {
    absolute: 'Наши продукты — ВайСклад, GwenStore | GwenCode',
  },
  description:
    'Собственные продукты GwenCode в Грозном: ВайСклад уже в проде, GwenStore и Dispatch — скоро. Решения для магазинов и доставки.',
  alternates: { canonical: '/products/' },
  openGraph: {
    title: 'Наши продукты GwenCode',
    description:
      'ВайСклад, GwenStore и Dispatch — собственные продукты IT-команды в Грозном.',
    url: '/products/',
  },
}

function ProductMedia({ product }: { product: OwnProduct }) {
  if (product.projectSlug) {
    const project = projects.find((item) => item.slug === product.projectSlug)
    if (project) {
      return (
        <a className="product-card-media" href={`/projects/${product.projectSlug}/`}>
          <ProjectCover
            project={project}
            sizes="(max-width: 640px) 92vw, (max-width: 980px) 80vw, 720px"
          />
        </a>
      )
    }
  }

  return (
    <div className={`product-card-media product-card-media-stub cover cover-${product.slug}`} aria-hidden>
      <div className="cover-window">
        <span />
        <span />
        <span />
        <div className="fake-ui">
          <b>{product.title}</b>
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <main className="products-page container">
      <p className="eyebrow">GwenCode · свои решения</p>
      <h1>Наши продукты</h1>
      <p className="products-lead">
        Это не заказы клиентов — продукты, которые мы ведём сами. Часть уже в проде, часть готовим
        к запуску.
      </p>

      <div className="products-grid">
        {ownProducts.map((product) => (
          <article
            className={`product-card${product.stub ? ' product-card-stub' : ''}`}
            key={product.slug}
          >
            <ProductMedia product={product} />
            <div className="product-card-body">
              <div className="badges">
                <span>Наш продукт</span>
                {product.status ? <span>{product.status}</span> : null}
                {product.platforms.map((platform) => (
                  <span key={platform}>{platform}</span>
                ))}
              </div>
              <h2>{product.title}</h2>
              <p>{product.short}</p>
              <ul className="product-features">
                {product.features.slice(0, 5).map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              {product.results?.length ? (
                <p className="product-result">{product.results[0]}</p>
              ) : null}
              <div className="product-actions">
                {product.url ? (
                  <a
                    className="button button-primary"
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Открыть {product.title} <ExternalLink size={16} aria-hidden />
                  </a>
                ) : null}
                {product.projectSlug ? (
                  <a className="button button-secondary" href={`/projects/${product.projectSlug}/`}>
                    Подробнее <ArrowRight size={16} aria-hidden />
                  </a>
                ) : product.stub ? (
                  <span className="button button-secondary product-stub-cta">Скоро в проде</span>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="products-cta">
        <div>
          <p className="eyebrow">Нужен свой продукт?</p>
          <h2>Соберём решение под ваш бизнес — или подскажем, хватит ли готового</h2>
          <p>
            Напишите в Telegram: разберём задачу и скажем, что быстрее — наш продукт или заказ
            с нуля. {site.city} и вся Россия.
          </p>
        </div>
        <ContactButton>Написать в Telegram</ContactButton>
      </section>
    </main>
  )
}
