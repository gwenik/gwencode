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
  Phone,
  Rocket,
  Send,
  ShoppingBag,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react'
import { ProjectCover } from '@/components/project-cover'
import { ContactButton, TelegramIcon, WhatsAppIcon } from '@/components/site-chrome'
import {
  audiences,
  buildContactLink,
  faq,
  homeProjectSlugs,
  marqueeItems,
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

function Roadmap() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const markers = [
      { id: 'about', step: 0 },
      { id: 'audiences', step: 1 },
      { id: 'services', step: 1 },
      { id: 'contact', step: 2 },
    ]
    let frame = 0

    const update = () => {
      frame = 0
      const line = window.scrollY + 120
      let step = 0
      for (const marker of markers) {
        const node = document.getElementById(marker.id)
        if (!node) continue
        const top = node.getBoundingClientRect().top + window.scrollY
        if (top <= line) step = marker.step
      }
      setActive(step)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
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
          Выберите ситуацию. Слева — как сейчас, справа — что меняется.
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
          <p>Без форм. Напишите задачу своими словами — вопросы зададим сами.</p>
          <p className="contact-note">
            Консультация и аудит вашей компании — <em>бесплатно</em>.
          </p>
        </div>
        <div className="contact-cards contact-cards-simple">
          <a className="contact-card primary" href={buildContactLink('telegram')} target="_blank" rel="noopener noreferrer">
            <span className="contact-icon" aria-hidden>
              <TelegramIcon size={22} />
            </span>
            <div>
              <b>Написать в Telegram</b>
              <span>@{site.telegram}</span>
            </div>
            <ArrowRight aria-hidden />
          </a>
          <a className="contact-card" href={buildContactLink('whatsapp')} target="_blank" rel="noopener noreferrer">
            <span className="contact-icon" aria-hidden>
              <WhatsAppIcon size={22} />
            </span>
            <div>
              <b>Написать в WhatsApp</b>
              <span>{site.phone}</span>
            </div>
            <ArrowRight aria-hidden />
          </a>
        </div>
      </div>
      <p className="contact-hours container">
        Пишите в любое время, мы на связи, обычно отвечаем в течение дня с 9:00 до 18:00 по Москве.
      </p>
    </section>
  )
}

const featured = homeProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project))

export default function Page() {
  return (
    <main>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">IT-компания в Грозном · gwencode</p>
          <h1>
            Переводим бизнес
            <br />
            <span>из тетрадки</span> в телефон
          </h1>
          <p className="hero-lead">
            Сайты, боты, приложения и учёт. Говорим просто, цену называем под задачу.
          </p>
          <div className="hero-cta">
            <ContactButton>Написать в Telegram</ContactButton>
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

      <Roadmap />

      <section id="about" className="section container">
        <div className="about-head">
          <p className="eyebrow">Шаг 1 · Кто мы</p>
          <h2>Запускаем проекты и свои продукты</h2>
          <p className="about-lead">
            Мы амбициозная команда разработчиков с огромным багажом знаний, языков программирования
            и желанием цифровизировать ваш бизнес. Но мы также не забываем и про свои проекты.
          </p>
        </div>
        <div className="about-board">
          <article className="about-card">
            <span>Кто мы</span>
            <strong>50+</strong>
            <p>Коммерческих проектов. Разработчики команды в IT с 2018 года.</p>
          </article>
          <article className="about-card about-card-product">
            <span>Свой продукт</span>
            <strong>100 реальных пользователей</strong>
            <p>
              У{' '}
              <a href="https://waysklad.gwensoft.ru" target="_blank" rel="noopener noreferrer">
                ВайСклада
              </a>{' '}
              — продукт учёта для малого бизнеса.
            </p>
          </article>
          <a className="about-card about-card-accent" href="/#contact">
            <span>Как связаться</span>
            <strong>Написать</strong>
            <p>Telegram, WhatsApp или звонок. Консультация бесплатно.</p>
          </a>
        </div>
        <div className="section-label">
          <span>Что умеем</span>
          <span className="label-line" />
        </div>
        <p className="skills-note">
          Боты, сайты, магазины, приложения, учёт и доработка. Ниже — проекты, которые уже работают.
        </p>
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
            <a className="projects-all" href="/projects/">
              Смотреть все проекты ({projects.length}) <ArrowRight size={16} aria-hidden />
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
        </div>
        <div className="help-row about-next">
          <a className="button button-secondary" href="/#audiences">
            Следующий шаг: что решаем <ArrowRight size={18} aria-hidden />
          </a>
        </div>
      </section>

      <AudienceSection />

      <section id="services" className="section container services-section">
        <svg className="offer-arc" viewBox="0 0 170 240" aria-hidden="true">
          <defs>
            <path id="offer-arc-path" d="M6 28 Q 152 16 160 228" />
          </defs>
          <text>
            <textPath href="#offer-arc-path" xlinkHref="#offer-arc-path">
              50+ проектов · с 2018 · ВайСклад · 100 человек · 50+ проектов · с 2018 · ВайСклад · 100 человек ·
              <animate attributeName="startOffset" from="0%" to="-100%" dur="14s" repeatCount="indefinite" />
            </textPath>
          </text>
        </svg>
        <div className="section-intro services-intro">
          <div>
            <p className="eyebrow">Что можем сделать</p>
            <h2>Соберём решение под вашу задачу</h2>
            <p>Цену называем после разговора. Консультация бесплатная.</p>
          </div>
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
                <div className="service-footer">
                  <div className="service-meta">
                    <strong>{service.pricing}</strong>
                    <span>Срок {service.duration}</span>
                  </div>
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
          <p>Сначала задача, потом план. Без сюрпризов в счёте.</p>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div className="process-step" key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>
                {'badge' in step && step.badge ? <em>{step.badge}</em> : null}
                {step.title}
              </h3>
              <p>{step.text}</p>
            </div>
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
