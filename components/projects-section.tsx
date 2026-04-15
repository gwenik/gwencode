"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, ExternalLink, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  name: string
  description: string
  url: string
  duration: string
  technologies: string[]
  image: string
}

function getProjectHostLabel(url: string) {
  if (url === "/") return "Этот сайт"

  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

const projects: Project[] = [
  {
    name: "gwencode",
    description: "Наш сайт и витрина услуг.",
    url: "/",
    duration: "—",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/gwencode_site.png",
  },
  {
    name: "groznybuh.ru",
    description: "Бухгалтерия и не только.",
    url: "https://groznybuh.ru",
    duration: "—",
    technologies: ["—"],
    image: "/placeholder.svg",
  },
  {
    name: "zaedu-zaberu.ru",
    description: "Приложение на iPhone и Android — доставка еды по всей ЧР.",
    url: "https://zaedu-zaberu.ru",
    duration: "—",
    technologies: ["—"],
    image: "/placeholder.svg",
  },
  {
    name: "assina.ru",
    description: "Магазин мебели от чеченского производителя.",
    url: "https://assina.ru",
    duration: "—",
    technologies: ["—"],
    image: "/assina.png",
  },
  {
    name: "mashar.ru",
    description: "Магазин велосипедов, байков и не только.",
    url: "https://mashar.ru",
    duration: "—",
    technologies: ["—"],
    image: "/mashar.png",
  },
  {
    name: "aves95.ru",
    description: "Инженерная компания в ЧР, Москве и Волгограде.",
    url: "https://aves95.ru",
    duration: "—",
    technologies: ["—"],
    image: "/placeholder.svg",
  },
  {
    name: "tidam.ru",
    description: "Проект tidam.ru.",
    url: "https://tidam.ru",
    duration: "—",
    technologies: ["—"],
    image: "/placeholder.svg",
  },
  {
    name: "Проект #8",
    description: "Скоро добавим описание и детали проекта.",
    url: "https://t.me/gwencode",
    duration: "—",
    technologies: ["—"],
    image: "/placeholder.svg",
  },
  {
    name: "Проект #9",
    description: "Скоро добавим описание и детали проекта.",
    url: "https://t.me/gwencode",
    duration: "—",
    technologies: ["—"],
    image: "/placeholder.svg",
  },
]

export function ProjectsSection() {
  const [viewportRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      onSelect()
    })
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  const canScrollPrev = useMemo(() => emblaApi?.canScrollPrev() ?? true, [emblaApi, selectedIndex])
  const canScrollNext = useMemo(() => emblaApi?.canScrollNext() ?? true, [emblaApi, selectedIndex])

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="inline-block px-6 py-2.5 rounded-full bg-accent/30 text-accent-foreground text-lg font-bold mb-6 border-2 border-accent/50">
            Наши проекты
          </h2>
        </div>

        <div className="relative max-w-6xl lg:max-w-7xl mx-auto">
          <div className="flex items-center gap-3 sm:gap-4">
            <motion.button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="hidden sm:flex w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background/90 backdrop-blur-sm border border-border items-center justify-center hover:bg-background transition-colors shadow-lg flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous project"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.button>

            {/* Embla viewport */}
            <div ref={viewportRef} className="overflow-hidden flex-1 py-2">
              <div className="flex -ml-4 lg:-ml-3">
                {projects.map((project) => (
                  <div
                    key={project.name}
                    className="pl-4 lg:pl-3 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
                  >
                    <div className="h-full py-1">
                      <ProjectCard project={project} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="hidden sm:flex w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background/90 backdrop-blur-sm border border-border items-center justify-center hover:bg-background transition-colors shadow-lg flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next project"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap">
            {scrollSnaps.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  index === selectedIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2",
                )}
                aria-label={`Go to project ${index + 1}`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                animate={{ width: index === selectedIndex ? 32 : 8 }}
                transition={{ duration: 0.25 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <div
      className={cn(
        "group relative h-full rounded-2xl border border-border bg-card card-hover-lift transition-shadow duration-300 ease-out hover:border-primary/35 hover:shadow-md",
        featured && "shadow-lg",
      )}
    >
      <div className="overflow-hidden rounded-2xl">
        <div className="p-5 pb-4 border-b border-border">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground text-balance">{project.name}</h3>
              </div>

              {project.url === "/" ? (
                <p className="mt-2 text-sm text-muted-foreground">Сайт: этот проект (текущая страница)</p>
              ) : (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex max-w-full items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  <span className="truncate">{getProjectHostLabel(project.url)}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80 flex-shrink-0" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Screenshot (contain = no cropping) */}
        <div className="relative bg-muted/25">
          <div className="relative aspect-[16/9] w-full">
            <img
              src={project.image || "/placeholder.svg"}
              alt={`Скриншот: ${project.name}`}
              className="card-media-zoom h-full w-full object-contain p-1.5 sm:p-2"
              loading="lazy"
            />
          </div>
          <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-foreground border border-border shadow-sm">
            Скриншот
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 pt-5">
          <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

          <div className="mb-4 rounded-xl border border-border bg-background/40 p-3">
            <div className="text-xs text-muted-foreground">Срок разработки</div>
            <div className="font-semibold text-foreground">{project.duration}</div>
          </div>

          <div className="pt-4 border-t border-border">
            <div className="text-xs text-muted-foreground mb-3">Использованные технологии</div>
            <div className="flex flex-wrap gap-2 min-h-[2.25rem]">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium leading-none bg-secondary text-secondary-foreground rounded-full border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
