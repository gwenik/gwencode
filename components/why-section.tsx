"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, Cog, Shield } from "lucide-react"
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"

const reasons = [
  {
    icon: TrendingUp,
    title: "Масштабирование бизнеса",
    description: "Автоматизация рутинных задач позволяет сосредоточиться на стратегическом развитии компании",
  },
  {
    icon: Clock,
    title: "Экономия времени",
    description: "Современные решения сокращают время выполнения задач в 10 раз и минимизируют человеческий фактор",
  },
  {
    icon: Cog,
    title: "Оптимизация процессов",
    description: "Интеграция систем и автоматизация workflow повышают эффективность всей команды",
  },
  {
    icon: Shield,
    title: "Надёжность и безопасность",
    description: "Профессиональная архитектура обеспечивает стабильную работу и защиту данных",
  },
]

export function WhySection() {
  return (
    <section id="why" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="inline-block px-6 py-2.5 rounded-full bg-accent/30 text-accent-foreground text-lg font-bold mb-6 border-2 border-accent/50">
            Зачем это вам?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Автоматизация и качественное ПО — это инвестиция в будущее вашего бизнеса
          </p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <reason.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary/0 rounded-b-2xl"
                whileHover={{ backgroundColor: "oklch(0.65 0.18 145 / 0.5)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
