"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Wrench } from "lucide-react"
import { staggerContainer, staggerItem, scaleIn, hoverLift } from "@/lib/animations"

type TechCategory = "python" | "javascript" | "tools"

interface Tech {
  name: string
  description: string
}

const techStack: Record<TechCategory, Tech[]> = {
  python: [
    { name: "FastAPI", description: "Высокопроизводительный асинхронный фреймворк" },
    { name: "Django", description: "Полнофункциональный веб-фреймворк" },
    { name: "Flask", description: "Микрофреймворк для веб-приложений" },
    { name: "SQLAlchemy", description: "ORM для работы с базами данных" },
    { name: "Alembic", description: "Миграции базы данных" },
    { name: "Poetry", description: "Управление зависимостями" },
    { name: "Aiogram", description: "Асинхронная библиотека для Telegram ботов" },
    { name: "BeautifulSoup4", description: "Парсинг HTML/XML документов" },
    { name: "Playwright", description: "Автоматизация браузера" },
    { name: "Pydantic", description: "Валидация данных" },
    { name: "Celery", description: "Распределённые задачи" },
    { name: "pytest", description: "Тестирование" },
  ],
  javascript: [
    { name: "React", description: "UI библиотека для веб-приложений" },
    { name: "Next.js", description: "Full-stack React фреймворк" },
    { name: "TypeScript", description: "Типизированный JavaScript" },
    { name: "Node.js", description: "Серверный JavaScript" },
    { name: "Express.js", description: "Веб-фреймворк для Node.js" },
    { name: "React Router", description: "Маршрутизация для React" },
    { name: "Vite", description: "Современный сборщик" },
    { name: "HTML5", description: "Разметка веб-страниц" },
    { name: "CSS3", description: "Стилизация интерфейсов" },
    { name: "Tailwind CSS", description: "Utility-first CSS фреймворк" },
    { name: "REST API", description: "Архитектура веб-сервисов" },
    { name: "Telegram API", description: "Интеграция с Telegram" },
  ],
  tools: [
    { name: "PostgreSQL", description: "Реляционная база данных" },
    { name: "Redis", description: "In-memory хранилище" },
    { name: "Docker", description: "Контейнеризация приложений" },
    { name: "Docker Compose", description: "Оркестрация контейнеров" },
    { name: "Git", description: "Контроль версий" },
    { name: "GitHub", description: "Хостинг репозиториев и CI/CD" },
    { name: "Nginx", description: "Веб-сервер и reverse proxy" },
    { name: "Linux", description: "Серверное администрирование" },
    { name: "Figma", description: "Дизайн интерфейсов" },
    { name: "VS Code", description: "Среда разработки" },
    { name: "Postman", description: "Тестирование API" },
    { name: "CI/CD", description: "Автоматизация деплоя" },
  ],
}

const categories = [
  {
    id: "python" as TechCategory,
    label: "Python",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 256 255" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pythonBlue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#387EB8" />
            <stop offset="100%" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="pythonYellow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFE873" />
            <stop offset="100%" stopColor="#FFD43B" />
          </linearGradient>
        </defs>
        <path
          d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
          fill="url(#pythonBlue)"
        />
        <path
          d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127h-61.868v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
          fill="url(#pythonYellow)"
        />
      </svg>
    ),
  },
  {
    id: "tools" as TechCategory,
    label: "Инструменты",
    icon: <Wrench className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    id: "javascript" as TechCategory,
    label: "JavaScript",
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" fill="#F7DF1E" rx="28" />
        <path
          d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"
          fill="#000"
        />
      </svg>
    ),
  },
]

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("python")
  const reduceMotion = useReducedMotion()

  return (
    <section id="stack" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="inline-block px-6 py-2.5 rounded-full bg-accent/30 text-accent-foreground text-lg font-bold mb-5 border-2 border-accent/50">
            Наш стек технологий
          </h2>
        </div>

        <div className="flex justify-center mb-10 scroll-mt-24">
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-secondary/60 rounded-2xl border border-border w-full max-w-fit mx-auto shadow-sm">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "relative flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl transition-colors flex-shrink-0 select-none",
                  activeCategory === category.id
                    ? "bg-background text-foreground border border-border shadow-md ring-2 ring-primary/35"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50",
                )}
                aria-label={category.label}
                title={category.label}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 35 }}
              >
                <motion.div
                  className={cn(
                    "relative z-10",
                    activeCategory === category.id ? "text-primary" : "text-muted-foreground",
                  )}
                  animate={{
                    rotate: reduceMotion || activeCategory !== category.id ? 0 : [0, 6, -6, 0],
                  }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.45 }}
                >
                  {category.icon}
                </motion.div>

                <span
                  className={cn(
                    "relative z-10 text-sm font-semibold hidden sm:inline",
                    activeCategory === category.id && "text-foreground",
                  )}
                >
                  {category.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={staggerContainer}
          >
            {techStack[activeCategory].map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={staggerItem}
                className="group relative bg-card rounded-xl border border-border p-4 transition-all duration-300"
                whileHover="hover"
                initial="rest"
                variants={hoverLift}
              >
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary"
                    whileHover={{ scale: 1.5 }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                  />
                  <h3 className="font-semibold text-foreground">{tech.name}</h3>
                </div>
                <motion.p
                  className="text-sm text-muted-foreground pl-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {tech.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">И множество других технологий...</p>
          <div className="flex justify-center gap-2 flex-wrap">
            {["GraphQL", "WebSocket", "JWT", "OAuth", "Swagger", "pytest", "Jest"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
