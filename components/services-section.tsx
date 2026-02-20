"use client"

import { motion } from "framer-motion"
import { Globe, Bot, Database, Smartphone, Server, Workflow } from "lucide-react"
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"

const services = [
  {
    icon: Globe,
    title: "Веб-приложения",
    description: "Современные SPA и full-stack приложения на React, Next.js, FastAPI и Django",
    features: ["REST API", "Адаптивный дизайн", "Высокая производительность"],
  },
  {
    icon: Bot,
    title: "Telegram боты",
    description: "Умные боты для бизнеса: от простых уведомлений до сложных CRM систем",
    features: ["Aiogram 3.x", "Inline режим", "Платёжные системы"],
  },
  {
    icon: Database,
    title: "Базы данных",
    description: "Проектирование, оптимизация и миграция баз данных любой сложности",
    features: ["PostgreSQL", "SQLAlchemy", "Alembic миграции"],
  },
  {
    icon: Workflow,
    title: "Автоматизация",
    description: "Автоматизация бизнес-процессов, парсинг данных и интеграция сервисов",
    features: ["Web scraping", "API интеграции", "Scheduler"],
  },
  {
    icon: Server,
    title: "Backend разработка",
    description: "Надёжные серверные решения с микросервисной архитектурой",
    features: ["FastAPI", "Django", "Docker"],
  },
  {
    icon: Smartphone,
    title: "Кроссплатформенные решения",
    description: "Единая кодовая база для web и мобильных устройств",
    features: ["PWA", "React Native", "Responsive"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="inline-block px-6 py-2.5 rounded-full bg-accent/30 text-accent-foreground text-lg font-bold mb-6 border-2 border-accent/50">
            Что мы можем предложить?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный цикл разработки: от идеи до production-ready решения
          </p>
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
                className="group bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 transition-all duration-300"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>
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
