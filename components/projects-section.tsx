"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Calendar, Clock, DollarSign, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { slideIn } from "@/lib/animations"

interface Project {
  name: string
  price: string
  duration: string
  completedDate: string
  technologies: string[]
  image: string
}

const projects: Project[] = [
  {
    name: "E-commerce платформа",
    price: "450 000 ₽",
    duration: "3 месяца",
    completedDate: "Сентябрь 2024",
    technologies: ["React", "Next.js", "PostgreSQL", "Stripe", "Docker", "TypeScript"],
    image: "/modern-ecommerce-website.png",
  },
  {
    name: "CRM-система для бизнеса",
    price: "680 000 ₽",
    duration: "4 месяца",
    completedDate: "Октябрь 2024",
    technologies: ["Django", "React", "PostgreSQL", "Redis", "Celery", "Docker"],
    image: "/professional-crm-dashboard.jpg",
  },
  {
    name: "Telegram бот-магазин",
    price: "150 000 ₽",
    duration: "1 месяц",
    completedDate: "Июль 2024",
    technologies: ["Python", "Aiogram", "SQLAlchemy", "PostgreSQL", "Redis"],
    image: "/telegram-bot-interface.png",
  },
  {
    name: "Корпоративный портал",
    price: "920 000 ₽",
    duration: "5 месяцев",
    completedDate: "Ноябрь 2024",
    technologies: ["FastAPI", "React", "PostgreSQL", "Docker", "Nginx", "Redis"],
    image: "/corporate-web-portal.jpg",
  },
  {
    name: "Система бронирования",
    price: "380 000 ₽",
    duration: "2.5 месяца",
    completedDate: "Август 2024",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    image: "/booking-system-interface.png",
  },
  {
    name: "Аналитическая панель",
    price: "520 000 ₽",
    duration: "3 месяца",
    completedDate: "Сентябрь 2024",
    technologies: ["React", "FastAPI", "PostgreSQL", "Redis", "Chart.js", "Docker"],
    image: "/analytics-dashboard.png",
  },
  {
    name: "Образовательная платформа",
    price: "780 000 ₽",
    duration: "4.5 месяца",
    completedDate: "Декабрь 2024",
    technologies: ["Django", "React", "PostgreSQL", "Celery", "Redis", "AWS"],
    image: "/online-learning-platform.png",
  },
  {
    name: "Маркетплейс услуг",
    price: "890 000 ₽",
    duration: "5 месяцев",
    completedDate: "Октябрь 2024",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "Stripe", "Docker", "Redis"],
    image: "/services-marketplace.jpg",
  },
  {
    name: "Финтех-приложение",
    price: "1 200 000 ₽",
    duration: "6 месяцев",
    completedDate: "Ноябрь 2024",
    technologies: ["React", "FastAPI", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    image: "/fintech-application.jpg",
  },
  {
    name: "Автоматизация складского учёта",
    price: "420 000 ₽",
    duration: "2 месяца",
    completedDate: "Июль 2024",
    technologies: ["Django", "PostgreSQL", "Celery", "Redis", "Docker"],
    image: "/warehouse-management-system.png",
  },
]

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextProject = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="inline-block px-6 py-2.5 rounded-full bg-accent/30 text-accent-foreground text-lg font-bold mb-6 border-2 border-accent/50">
            Наши проекты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Примеры реализованных решений для различных бизнес-задач
          </p>
        </div>

        {/* Carousel - один проект на всех устройствах */}
        <div className="flex items-center gap-0 sm:gap-4 max-w-6xl mx-auto">
          {/* Navigation button - слева (скрыта на мобильных) */}
          <motion.button
            onClick={prevProject}
            className="hidden sm:flex w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background/90 backdrop-blur-sm border border-border items-center justify-center hover:bg-background transition-all shadow-lg flex-shrink-0"
            aria-label="Previous project"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.button>

          {/* Карточка проекта */}
          <div className="flex-1 w-full sm:w-auto">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideIn}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const threshold = 50
                  const velocityThreshold = 500

                  if (Math.abs(offset.x) > threshold || Math.abs(velocity.x) > velocityThreshold) {
                    if (offset.x > 0 || velocity.x > 0) {
                      prevProject()
                    } else {
                      nextProject()
                    }
                  }
                }}
                className="cursor-grab active:cursor-grabbing"
              >
                <ProjectCard project={projects[currentIndex]} featured />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation button - справа (скрыта на мобильных) */}
          <motion.button
            onClick={nextProject}
            className="hidden sm:flex w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background/90 backdrop-blur-sm border border-border items-center justify-center hover:bg-background transition-all shadow-lg flex-shrink-0"
            aria-label="Next project"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToProject(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2",
              )}
              aria-label={`Go to project ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                width: index === currentIndex ? 32 : 8,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <motion.div
      className={cn(
        "group relative bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300",
        featured && "shadow-lg",
      )}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <motion.img
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6 -mt-12 z-10">
        <h3 className="text-2xl font-bold text-foreground mb-4 text-balance">{project.name}</h3>

        {/* Info grid */}
        <div className="grid grid-cols-1 gap-2.5 mb-5">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Стоимость</div>
              <div className="font-semibold text-foreground">{project.price}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Длительность</div>
              <div className="font-semibold text-foreground">{project.duration}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Завершено</div>
              <div className="font-semibold text-foreground">{project.completedDate}</div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="pt-4 border-t border-border">
          <div className="text-xs text-muted-foreground mb-3">Технологии</div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <motion.span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.1, borderColor: "oklch(0.65 0.18 145 / 0.5)" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Navigation button */}
        <div className="mt-6">
          <motion.button
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all group/btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Перейти
            <motion.span
              animate={{ x: [0, 4, 0], y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
