'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  Database,
  Globe2,
  Rocket,
  ShoppingBag,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react'
import { OfferArc } from '@/components/offer-arc'
import { ContactButton } from '@/components/site-chrome'
import {
  audiences,
  buildContactLink,
  faq,
  processSteps,
  reasons,
  services,
  testimonials,
} from '@/lib/content'

const icons = [Bot, Globe2, ShoppingBag, Smartphone, Database, Rocket]

function AudienceSection() {
  const [selected, setSelected] = useState(0)
  const audience = audiences[selected]

  return (
    <section className="audience-section" id="audiences">
      <div className="container">
        <p className="eyebrow">Что решаем</p>
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
            <span className="state-label">
              <X size={15} aria-hidden /> Как болит сейчас
            </span>
            <ul>
              {audience.now.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <ArrowRight className="state-arrow" aria-hidden />
          <div className="state after">
            <span className="state-label">
              <Check size={15} aria-hidden /> Как закрываем
            </span>
            <ul>
              {audience.after.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="help-row">
          <div>
            <span>Чем закрываем:</span>
            {audience.services.map((item) => (
              <b key={item}>{item}</b>
            ))}
          </div>
          <ContactButton channel="telegram" message={audience.message}>
            Это про меня — обсудить бесплатно
          </ContactButton>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="section container" id="about">
        <div className="about-head">
          <p className="eyebrow">Кто мы</p>
          <h1>Создаём не только свои — но и ваши продукты</h1>
          <p className="about-lead">
            Разработчики в IT с 2018 года: сайты, боты, магазины и учёт для бизнеса в Грозном и по
            России. Параллельно ведём свой продукт — ВайСклад, им уже пользуются магазины.
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
              <a href="https://waysklad.gwencode.ru" target="_blank" rel="noopener noreferrer">
                ВайСклада
              </a>{' '}
              — учёт товаров, продаж и долгов с телефона.
            </p>
          </article>
          <a className="about-card about-card-accent" href="/#contact">
            <span>Связь</span>
            <strong>Telegram</strong>
            <p>Канал и личные сообщения — контакты внизу каждой страницы.</p>
          </a>
        </div>
        <div className="reasons-grid" aria-label="Почему GwenCode">
          {reasons.map((item) => (
            <article className="reason-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <AudienceSection />

      <section id="services" className="section container services-section">
        <OfferArc />
        <div className="section-intro services-intro">
          <div>
            <p className="eyebrow">Что можем сделать</p>
            <h2>Не «всё подряд» — решение под вашу боль</h2>
            <p>
              Срок и цену называем после короткого разговора. Консультация бесплатная — платите
              только когда понятно, что получите.
            </p>
          </div>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = icons[index]
            return (
              <article className="service-card" key={service.title}>
                <div className="service-heading">
                  <div className="icon-box">
                    <Icon size={22} aria-hidden />
                  </div>
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
                      Чем PWA отличается от обычного приложения?{' '}
                      <ChevronDown size={18} aria-hidden />
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
                    href={buildContactLink(
                      'telegram',
                      `Здравствуйте! Интересует: ${service.title}. Хочу понять срок и цену.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Узнать срок и цену <ArrowRight size={16} aria-hidden />
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
            <h2>От сообщения до запуска — без сюрпризов в счёте</h2>
          </div>
          <p>Сначала задача и понятный план. Потом договор с ценой и сроком. Потом работа.</p>
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

      {testimonials.length > 0 ? (
        <section className="section container reviews" id="reviews" aria-labelledby="reviews-title">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Отзывы клиентов</p>
              <h2 id="reviews-title">Не мы себя хвалим — говорят те, с кем уже работали</h2>
            </div>
            <p>Реальные формулировки клиентов.</p>
          </div>
          <div className="reviews-grid">
            {testimonials.map((item) => (
              <figure className="review-card" key={`${item.name}-${item.quote.slice(0, 24)}`}>
                <blockquote>
                  <p>{item.quote}</p>
                </blockquote>
                <figcaption>
                  {item.photo ? (
                    <img className="review-avatar" src={item.photo} alt="" width={44} height={44} />
                  ) : (
                    <span className="review-avatar review-avatar-fallback" aria-hidden>
                      {item.name.slice(0, 1)}
                    </span>
                  )}
                  <div>
                    <strong>{item.name}</strong>
                    <span>
                      {item.role}
                      {item.company ? ` · ${item.company}` : ''}
                    </span>
                    {item.project ? (
                      <a href={`/projects/${item.project}/`}>Смотреть заказ</a>
                    ) : null}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section container faq-wrap">
        <div className="faq">
          <p className="eyebrow">Коротко о главном</p>
          <h2>Ответы на вопросы до того, как вы напишете</h2>
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
          <h3>Есть задача — и не хотите гадать с ценой?</h3>
          <p>Напишите в Telegram или найдите контакты внизу страницы.</p>
          <ContactButton>
            Обсудить задачу бесплатно <ArrowRight size={18} aria-hidden />
          </ContactButton>
        </aside>
      </section>
    </main>
  )
}
