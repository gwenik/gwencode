'use client'

import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  Database,
  Globe2,
  MessageCircle,
  Rocket,
  Send,
  ShoppingBag,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react'
import { ProjectCover } from '@/components/project-cover'
import { ContactButton } from '@/components/site-chrome'
import {
  audiences,
  buildContactLink,
  faq,
  marqueeItems,
  principles,
  processSteps,
  projects,
  services,
  site,
} from '@/lib/content'

const icons = [Bot, Globe2, ShoppingBag, Smartphone, Database, Rocket]
const steps = [
  { href: '/#about', label: 'Кто мы' },
  { href: '/#audiences', label: 'Что решаем' },
  { href: '/#contact', label: 'Связаться' },
]

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
        <span>Кроссовки 42 — 2 шт.</span>
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
                  Здравствуйте! Есть кроссовки 42 размера?
                  <em>09:40</em>
                </div>
                <div className="typing">бот печатает…</div>
                <div className="bubble bot">
                  Да, есть 3 модели 👟
                  <div className="quick">
                    <span>Показать</span>
                    <span>Позвать менеджера</span>
                  </div>
                  <em>09:41</em>
                </div>
                <div className="bubble client">
                  Беру вторые, доставка на завтра
                  <em>09:41</em>
                </div>
                <div className="bubble bot">
                  Заказ №1024 оформлен ✅
                  <br />
                  Ссылка на оплату отправлена
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

function Roadmap() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    // audiences + services = шаг 2; about = 1; contact = 3
    const sectionToStep: Record<string, number> = {
      about: 0,
      audiences: 1,
      services: 1,
      contact: 2,
    }
    const ids = Object.keys(sectionToStep)
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node))
    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }
        let bestId = ''
        let bestRatio = 0
        for (const id of ids) {
          const ratio = ratios.get(id) ?? 0
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        }
        if (bestId && bestRatio > 0) setActive(sectionToStep[bestId])
      },
      { rootMargin: '-28% 0px -52% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="roadmap-wrap container">
      <p className="eyebrow">Три шага, чтобы понять, подходим ли мы вам</p>
      <div className="roadmap">
        <div className="roadmap-line" />
        {steps.map((step, index) => (
          <a className={active === index ? 'road-stop active' : 'road-stop'} href={step.href} key={step.href}>
            <span>{index + 1}</span>
            <b>{step.label}</b>
          </a>
        ))}
      </div>
    </div>
  )
}

function AudienceSection() {
  const [selected, setSelected] = useState(0)
  const audience = audiences[selected]

  return (
    <section className="audience-section" id="audiences">
      <div className="container">
        <p className="eyebrow">Шаг 2 · Что решаем и как</p>
        <h2>Узнаёте свою боль? Покажем, как её закрыть</h2>
        <p className="section-subtitle">
          Не «для ритейла» и не «для HoReCa» — для вашей конкретной дыры в деньгах, заявках или учёте. Нажмите на ситуацию: слева — как обычно болит сейчас, справа — что меняется после запуска.
        </p>
        <div className="audience-tabs" role="tablist" aria-label="Боль бизнеса">
          {audiences.map((item, index) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={selected === index}
              className={selected === index ? 'selected' : ''}
              onClick={() => setSelected(index)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="before-after" role="tabpanel">
          <div className="state now">
            <span className="state-label"><X size={15} aria-hidden /> Как болит сейчас</span>
            <ul>{audience.now.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <ArrowRight className="state-arrow" aria-hidden />
          <div className="state after">
            <span className="state-label"><Check size={15} aria-hidden /> Как закрываем</span>
            <ul>{audience.after.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
        <div className="help-row">
          <div>
            <span>Чем закрываем:</span>
            {audience.services.map((item) => <b key={item}>{item}</b>)}
          </div>
          <ContactButton channel="telegram" message={audience.message}>
            Это про меня — обсудить
          </ContactButton>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">Шаг 3 · Связаться</p>
          <h2>Напишите нам — как вам удобно</h2>
          <p>
            Формы заполнять не нужно. Напишите задачу своими словами в Telegram или WhatsApp — дальше мы сами зададим
            вопросы.
          </p>
          <p className="contact-note">Консультация и аудит вашей компании — бесплатно.</p>
        </div>
        <div className="contact-cards contact-cards-simple">
          <a className="contact-card primary" href={buildContactLink('telegram')} target="_blank" rel="noopener noreferrer">
            <Send aria-hidden />
            <div>
              <b>Написать в Telegram</b>
              <span>@{site.telegram}</span>
            </div>
            <ArrowRight aria-hidden />
          </a>
          <a className="contact-card" href={buildContactLink('whatsapp')} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden />
            <div>
              <b>Написать в WhatsApp</b>
              <span>{site.phone}</span>
            </div>
            <ArrowRight aria-hidden />
          </a>
        </div>
      </div>
      <p className="contact-hours container">
        Пишем {site.hours} по Москве, обычно в течение {site.responseTime}. Рабочие часы — {site.workHours}.
      </p>
    </section>
  )
}

const featured = projects.filter((project) => project.featured).sort((a, b) => a.order - b.order)

export default function Page() {
  return (
    <main>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">IT-студия gwensoft</p>
          <h1>
            Переводим бизнес
            <br />
            <span>из тетрадки</span> в телефон
          </h1>
          <p className="hero-lead">
            Делаем сайты, Telegram-ботов, мобильные приложения и системы учёта для магазинов, оптовиков, школ и экспертов.
            Объясняем простыми словами, без сложных терминов.
          </p>
          <div className="hero-buttons">
            <ContactButton>Написать в Telegram</ContactButton>
            <ContactButton channel="whatsapp" className="button button-secondary">
              Написать в WhatsApp
            </ContactButton>
          </div>
          <p className="fine-print">
            Без форм. Telegram @{site.telegram} или WhatsApp {site.phone}. Пишем {site.hours} по Москве.
          </p>
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

      <Roadmap />

      <section id="about" className="section container">
        <div className="section-intro">
          <div>
            <p className="eyebrow">Шаг 1 · Кто мы</p>
            <h2>Мы — gwensoft, команда разработчиков</h2>
          </div>
          <div>
            <p>
              Делаем сайты, ботов, приложения и системы учёта для малого и среднего бизнеса. Работаем в Чечне и удалённо по
              всей России.
            </p>
            <p>
              Мы не только выполняем заказы, но и делаем свои продукты. Например, ВайСклад — бесплатная система учёта для
              небольших магазинов, ею уже пользуются реальные магазины. Поэтому понимаем бизнес не по учебнику.
            </p>
          </div>
        </div>
        <div className="stats-grid">
          {site.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="section-label">
          <span>Что умеем</span>
          <span className="label-line" />
        </div>
        <div className="skill-chips">
          {services.map((service, index) => {
            const Icon = icons[index]
            return (
              <a href="/#services" key={service.title}>
                <Icon size={17} aria-hidden />
                {service.short}
              </a>
            )
          })}
        </div>
        <div className="projects-preview">
          <div className="section-label">
            <span>Наши проекты</span>
            <a href="/projects/">
              Смотреть все проекты ({projects.length}) <ArrowRight size={16} aria-hidden />
            </a>
          </div>
          <div className="project-mini-grid">
            {featured.map((project) => (
              <a className="project-mini" href={`/projects/${project.slug}/`} key={project.slug}>
                <ProjectCover project={project} />
                <p>{project.title}</p>
                <span>{project.short}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="help-row" style={{ marginTop: 36 }}>
          <a className="button button-secondary" href="/#services">
            Следующий шаг: что решаем <ArrowRight size={18} aria-hidden />
          </a>
        </div>
      </section>

      <AudienceSection />

      <section id="services" className="section container services-section">
        <div className="section-intro">
          <div>
            <p className="eyebrow">Все услуги и цены</p>
            <h2>Соберём решение под вашу задачу</h2>
          </div>
          <p>Цены — ориентир. Точную сумму и срок называем после короткого разговора о задаче.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = icons[index]
            return (
              <article className="service-card" key={service.title}>
                <div className="service-heading">
                  <div className="icon-box"><Icon size={22} aria-hidden /></div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.benefit}</p>
                  </div>
                </div>
                <ul className="service-list service-list-always">
                  {service.items.map((item) => (
                    <li key={item}>
                      <Check size={17} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                {'hasPwaCompare' in service && service.hasPwaCompare ? (
                  <details>
                    <summary className="accordion-trigger" style={{ display: 'flex' }}>
                      Чем PWA отличается от обычного приложения? <ChevronDown size={18} aria-hidden />
                    </summary>
                    <div className="pwa-compare">
                      <table>
                        <thead>
                          <tr>
                            <th />
                            <th>Обычное приложение</th>
                            <th>PWA</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Установка</td>
                            <td>через App Store или Google Play</td>
                            <td>по ссылке или QR-коду</td>
                          </tr>
                          <tr>
                            <td>Платформы</td>
                            <td>отдельно для iPhone и Android</td>
                            <td>одно приложение для всех</td>
                          </tr>
                          <tr>
                            <td>Обновления</td>
                            <td>через магазин приложений</td>
                            <td>сразу у всех пользователей</td>
                          </tr>
                          <tr>
                            <td>Комиссия магазина</td>
                            <td>15–30%</td>
                            <td>нет</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </details>
                ) : null}
                <details className="service-mobile-acc">
                  <summary className="accordion-trigger">
                    Что входит <ChevronDown size={18} aria-hidden />
                  </summary>
                  <ul className="service-list">
                    {service.items.map((item) => (
                      <li key={item}>
                        <Check size={17} aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>
                <p className="result">
                  <b>Результат — </b>
                  {service.result}
                </p>
                <div className="service-footer">
                  <strong>от {service.price} ₽</strong>
                  <span>от {service.duration}</span>
                  <a
                    href={buildContactLink('telegram', `Здравствуйте! Интересует: ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Обсудить <ArrowRight size={16} aria-hidden />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section container process">
        <div className="section-intro">
          <div>
            <p className="eyebrow">Как мы работаем</p>
            <h2>От первого сообщения до работающего проекта</h2>
          </div>
          <p>Без сложных терминов и неожиданных счетов. Сначала разбираемся в задаче, потом согласуем план.</p>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div className="process-step" key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>
                {step.title}
                {'badge' in step && step.badge ? <em>{step.badge}</em> : null}
              </h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
        <div className="principles">
          {principles.map((item) => (
            <span key={item}>
              <Check size={17} aria-hidden />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section container faq-wrap">
        <div className="faq">
          <p className="eyebrow">Коротко о главном</p>
          <h2>Ответы на частые вопросы</h2>
          {faq.map((item, index) => (
            <details className="faq-item" key={item.q} open={index === 0}>
              <summary>
                <span>{item.q}</span>
                <ChevronDown size={21} aria-hidden />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        <aside className="cta-card">
          <Sparkles aria-hidden />
          <h3>Есть задача, но не знаете, с чего начать?</h3>
          <p>Напишите в Telegram — подскажем первый шаг.</p>
          <a className="button button-primary" href="/#contact">
            К контактам <ArrowRight size={18} aria-hidden />
          </a>
        </aside>
      </section>

      <ContactSection />
    </main>
  )
}
