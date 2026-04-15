"use client"

import { motion } from "framer-motion"
import { Globe, Bot, Database, Smartphone, Server, Workflow, DollarSign } from "lucide-react"
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"

const services = [
  {
    icon: Globe,
    title: "Сайт или страничка",
    description: "Сделаем понятный сайт: визитку, лендинг или многостраничный — под вашу задачу.",
    features: ["Адаптивно под телефон", "Быстрая загрузка", "Удобная админка (если нужно)"],
  },
  {
    icon: DollarSign,
    title: "Интернет-магазин",
    description: "Каталог, корзина, оформление заказа, оплата и доставка — всё как у больших магазинов.",
    features: ["Каталог и фильтры", "Корзина и заказы", "Оплата/доставка (по необходимости)"],
  },
  {
    icon: Smartphone,
    title: "Приложение / личный кабинет",
    description: "Сервисы для клиентов и сотрудников: заявки, статусы, документы, уведомления.",
    features: ["Личный кабинет", "Роли и доступы", "Интеграции с сервисами"],
  },
  {
    icon: Workflow,
    title: "Автоматизация бизнеса",
    description: "Уберём ручную рутину: отчёты, выгрузки, уведомления, синхронизации между сервисами.",
    features: ["Экономит время", "Меньше ошибок", "Работает по расписанию"],
  },
  {
    icon: Server,
    title: "IT-решения для бизнеса",
    description: "Сделаем систему под процессы вашей компании: от простой панели до сложного сервиса.",
    features: ["Под ваши процессы", "Масштабируемо", "Безопасно"],
  },
  {
    icon: Bot,
    title: "Telegram и WhatsApp-боты",
    description: "Боты для продаж и поддержки: заявки, ответы, напоминания, записи, рассылки.",
    features: ["Сценарии и меню", "Интеграция с CRM/таблицами", "Уведомления и рассылки"],
  },
  {
    icon: Database,
    title: "Программы для расчётов",
    description: "Калькуляторы рассрочки, стоимости продукции и других расчётов — под ваши правила.",
    features: ["Точные формулы", "Понятный интерфейс", "Экспорт в Excel/PDF (если нужно)"],
    cardClassName: "lg:col-start-2",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="inline-block px-6 py-2.5 rounded-full bg-accent/30 text-accent-foreground text-lg font-bold mb-6 border-2 border-accent/50">
            Что мы можем предложить?
          </h2>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`group bg-card border border-border rounded-2xl p-6 lg:p-8 card-hover-lift hover:border-primary/50 ${service.cardClassName ?? ""}`}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="icon-hover-pop w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportOnce}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-primary mr-2"
                        whileHover={{ scale: 1.5 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
