"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Users, Headphones, Rocket, Award, RefreshCw } from "lucide-react"
import { fadeInLeft, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"

const advantages = [
  {
    icon: Users,
    title: "Опытная команда",
    description: "Разработчики с опытом 5+ лет в коммерческой разработке",
  },
  {
    icon: Headphones,
    title: "Постоянная связь",
    description: "Всегда на связи, отвечаем в течение часа в рабочее время",
  },
  {
    icon: Rocket,
    title: "Быстрый старт",
    description: "Начинаем работу в течение 24 часов после согласования",
  },
  {
    icon: Award,
    title: "Гарантия качества",
    description: "Код-ревью, тестирование и документация на каждом проекте",
  },
  {
    icon: RefreshCw,
    title: "Гибкий подход",
    description: "Agile методология и прозрачный процесс разработки",
  },
  {
    icon: CheckCircle2,
    title: "Поддержка после запуска",
    description: "Техническая поддержка и развитие проекта после релиза",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInLeft}
          >
            <motion.h2
              variants={fadeInLeft}
              className="inline-block px-6 py-2.5 rounded-full bg-accent/30 text-accent-foreground text-lg font-bold mb-6 border-2 border-accent/50"
            >
              Почему мы?
            </motion.h2>
            <motion.p
              variants={fadeInLeft}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Мы не просто пишем код — мы создаём решения, которые помогают бизнесу расти. Каждый проект для нас — это
              возможность показать, что качественная разработка может быть доступной и понятной.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={fadeInLeft}
            >
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm text-foreground">Python</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-accent"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                />
                <span className="text-sm text-foreground">JavaScript</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                />
                <span className="text-sm text-foreground">TypeScript</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group flex items-start gap-4 p-4 bg-card rounded-xl border border-border card-hover-lift ring-1 ring-inset ring-border/50 hover:ring-2 hover:ring-inset hover:ring-primary/25"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <advantage.icon className="icon-hover-pop w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
