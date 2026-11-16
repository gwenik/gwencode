import {
  ArrowRight,
  BarChart3,
  Check,
  Phone,
  Send,
} from 'lucide-react'
import { ProjectCover } from '@/components/project-cover'
import { ContactButton } from '@/components/site-chrome'
import {
  audiences,
  buildContactLink,
  homeProjectSlugs,
  marqueeItems,
  ownProducts,
  projects,
  site,
} from '@/lib/content'

function PhoneMockup() {
  return (
    <div className="visual-wrap" aria-hidden="true">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="signal-board">
        <span className="board-kicker">LIVE / 09:42</span>
        <strong>+38%</strong>
        <small>заказы после автоматизации</small>
        <div className="signal-chart">
          <i /><i /><i /><i /><i /><i /><i /><i />
        </div>
        <div className="board-footer">
          <span>до</span><b>124</b><span>после</span><b>171</b>
        </div>
      </div>
      <div className="paper">
        <span>Кроссовки 44 — 2 шт.</span>
        <span>Выручка за день — ?</span>
        <span>Долг 1 500 ₽ — вернуть в пт</span>
      </div>

      <div className="iphone">
        <span className="iphone-btn iphone-btn-silent" />
        <span className="iphone-btn iphone-btn-vol-up" />
        <span className="iphone-btn iphone-btn-vol-down" />
        <span className="iphone-btn iphone-btn-power" />
        <div className="iphone-frame">
          <div className="iphone-screen">
            <div className="iphone-status">
              <span className="iphone-time">9:41</span>
              <span className="iphone-island" />
              <span className="iphone-tray" aria-hidden="true">
                <svg className="iphone-ico" width="17" height="11" viewBox="0 0 17 11" fill="none">
                  <rect x="0" y="7.5" width="3" height="3.5" rx=".6" fill="currentColor" />
                  <rect x="4.5" y="5" width="3" height="6" rx=".6" fill="currentColor" />
                  <rect x="9" y="2.5" width="3" height="8.5" rx=".6" fill="currentColor" />
                  <rect x="13.5" y="0" width="3" height="11" rx=".6" fill="currentColor" />
                </svg>
                <svg className="iphone-ico" width="15" height="11" viewBox="0 0 15 11" fill="none">
                  <path d="M7.5 3.2c1.7 0 3.3.6 4.5 1.7l1.1-1.2A8.2 8.2 0 0 0 7.5 1.2 8.2 8.2 0 0 0 1.9 3.7l1.1 1.2A6.5 6.5 0 0 1 7.5 3.2Z" fill="currentColor" />
                  <path d="M7.5 6.2c1 0 1.9.3 2.6.9l1.1-1.2A5.2 5.2 0 0 0 7.5 4.4 5.2 5.2 0 0 0 3.8 5.9l1.1 1.2a3.7 3.7 0 0 1 2.6-.9Z" fill="currentColor" />
                  <circle cx="7.5" cy="9.4" r="1.3" fill="currentColor" />
                </svg>
                <svg className="iphone-ico iphone-ico-battery" width="25" height="12" viewBox="0 0 25 12" fill="none">
                  <rect x=".75" y=".75" width="20.5" height="10.5" rx="2.2" stroke="currentColor" strokeWidth="1.5" opacity=".45" />
                  <rect x="2.4" y="2.4" width="15.2" height="7.2" rx="1.2" fill="currentColor" />
                  <path d="M23 4v4a1.6 1.6 0 0 0 0-4Z" fill="currentColor" opacity=".45" />
                </svg>
              </span>
            </div>

            <div className="tg-app">
              <div className="tg-header">
                <span className="tg-back">‹</span>
                <div className="tg-peer">
                  <span className="tg-avatar">М</span>
                  <div>
                    <b>Магазин рядом</b>
                    <small>бот · в сети</small>
                  </div>
                </div>
                <span className="tg-more">•••</span>
              </div>

              <div className="tg-chat">
                <div className="tg-day">сегодня</div>
                <div className="bubble client">
                  Здравствуйте, хочу приобрести кроссовки, есть 44 размер?
                  <em>09:40</em>
                </div>
                <div className="typing">бот печатает…</div>
                <div className="bubble bot">
                  Приветствуем вас, да, у нас в наличии есть 10 моделей.
                  <div className="quick">
                    <span>Показать</span>
                    <span>Позвать менеджера</span>
                  </div>
                  <em>09:41</em>
                </div>
                <div className="bubble client">
                  Беру вторые, доставка сегодня в 18:30, по этой улице…
                  <em>09:41</em>
                </div>
                <div className="bubble bot">
                  Заказ номер №1024 оформлен <span className="tg-ok">✓</span>
                  <br />
                  Ссылка на оплату выслана ниже:
                  <span className="tg-pay-hint" aria-hidden="true">
                    ↓↓
                  </span>
                  <em>09:42</em>
                </div>
              </div>

              <div className="tg-composer">
                <span className="tg-attach">+</span>
                <span className="tg-field">Написать сообщение</span>
                <span className="tg-send"><Send size={14} /></span>
              </div>
            </div>

            <div className="iphone-home" />
          </div>
        </div>
      </div>

      <div className="revenue">
        <BarChart3 size={18} />
        <div>
          <b>48 200 ₽</b>
          <small>Выручка сегодня · <em>+12%</em></small>
        </div>
        <div className="bars">
          <i /><i /><i /><i /><i /><i />
        </div>
      </div>
    </div>
  )
}

const featured = homeProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project))

const liveProducts = ownProducts.filter((product) => !product.stub)

export default function Page() {
  return (
    <main>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">IT-компания в Грозном · GwenCode</p>
          <h1>
            Переводим бизнес
            <br />
            <span>из тетрадки</span> в телефон
          </h1>
          <p className="hero-lead">
            GwenCode — IT в Грозном для бизнеса, который устал считать в тетрадях и ловить заявки по чатам.
            Разбираем задачу и называем цену до договора.
          </p>
          <div className="hero-cta">
            <ContactButton>Обсудить задачу бесплатно</ContactButton>
            <div className="hero-cta-side">
              <ContactButton channel="whatsapp" className="button button-secondary">
                Написать в WhatsApp
              </ContactButton>
              <a
                className="button button-secondary button-call"
                href={buildContactLink('phone')}
                aria-label={`Позвонить ${site.phone}`}
              >
                <Phone size={18} aria-hidden />
              </a>
            </div>
          </div>
          <div className="hero-facts">
            {site.heroFacts.map((fact) => (
              <span key={fact}>
                <Check size={17} aria-hidden />
                {fact}
              </span>
            ))}
          </div>
        </div>
        <PhoneMockup />
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i>•</i>
            </span>
          ))}
        </div>
      </div>

      <section className="section container home-pain" id="pain" aria-labelledby="pain-title">
        <div className="section-intro home-pain-intro">
          <div>
            <p className="eyebrow">Какую боль закрываем</p>
            <h2 id="pain-title">Узнаёте себя — значит, можем помочь</h2>
          </div>
          <p>
            Коротко: заявки, учёт, сайт, продажи без вас у телефона.
            Подробности — на странице{' '}
            <a href="/about/#audiences">Кто мы</a>.
          </p>
        </div>
        <div className="home-pain-grid">
          {audiences.slice(0, 4).map((item) => (
            <a className="home-pain-card" href="/about/#audiences" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.now[0]}</p>
              <span>
                Как закрываем <ArrowRight size={15} aria-hidden />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="section container home-orders" aria-labelledby="orders-title">
        <div className="projects-preview">
          <div className="section-label projects-preview-head">
            <span id="orders-title">Заказы</span>
            <span className="label-line" />
            <a className="projects-all" href="/projects/">
              Все
              <span className="projects-all-count">{projects.length}</span>
              <ArrowRight size={15} aria-hidden />
            </a>
          </div>
          <div className="project-mini-grid">
            {featured.map((project, index) => (
              <a className="project-mini" href={`/projects/${project.slug}/`} key={project.slug}>
                <ProjectCover project={project} eager={index === 0} />
                <p>{project.title}</p>
                <span>{project.short}</span>
              </a>
            ))}
          </div>
          <a className="projects-all-mobile" href="/projects/">
            Смотреть все заказы
            <ArrowRight size={16} aria-hidden />
          </a>
        </div>
      </section>

      <section className="section container home-products" aria-labelledby="products-title">
        <div className="section-label">
          <span id="products-title">Наши продукты</span>
          <span className="label-line" />
          <a className="projects-all" href="/products/">
            Все продукты
            <ArrowRight size={15} aria-hidden />
          </a>
        </div>
        <div className="home-products-row">
          {liveProducts.map((product) => (
            <article className="home-product-card" key={product.slug}>
              <div>
                <p className="eyebrow">Уже в проде</p>
                <h3>{product.title}</h3>
                <p>{product.short}</p>
              </div>
              <div className="home-product-actions">
                {product.url ? (
                  <a
                    className="button button-primary"
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Открыть
                  </a>
                ) : null}
                <a className="button button-secondary" href="/products/">
                  Подробнее
                </a>
              </div>
            </article>
          ))}
          <a className="home-product-card home-product-card-link" href="/products/">
            <p className="eyebrow">Скоро</p>
            <h3>GwenStore и Dispatch</h3>
            <p>Готовим к запуску. Смотрите статус на странице продуктов.</p>
            <span>
              Смотреть <ArrowRight size={15} aria-hidden />
            </span>
          </a>
        </div>
      </section>
    </main>
  )
}
