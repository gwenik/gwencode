"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Zap, Bot } from "lucide-react"
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer, staggerItem, parallax, countUp } from "@/lib/animations"

const codeLines = [
  "from fastapi import FastAPI",
  'import React from "react"',
  "async def automate():",
  "    await magic()",
  "const success = true",
]

// Number counter hook
function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(start + (end - start) * easeOutQuart))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration, start])

  return { count, ref }
}

// Magnetic button component
function MagneticButton({ children, className, ...props }: any) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
    const maxDistance = 100

    if (distance < maxDistance) {
      x.set((distanceX / maxDistance) * 20)
      y.set((distanceY / maxDistance) * 20)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.a>
  )
}

export function HeroSection() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const projectsCount = useCountUp(50, 2000)
  const yearsCount = useCountUp(5, 2000)
  const resultCount = useCountUp(100, 2000)

  useEffect(() => {
    const line = codeLines[currentLine]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex <= line.length) {
        setDisplayedCode(line.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentLine((prev) => (prev + 1) % codeLines.length)
        }, 2000)
      }
    }, 80)

    return () => clearInterval(typeInterval)
  }, [currentLine])

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ opacity }}
    >
      {/* Background decorations with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          style={{ y: y2 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"
          style={{ y: y1 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full"
          style={{ y: y2 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-accent"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-muted-foreground">Открыты к новым проектам</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Превращаем идеи в <span className="gradient-text">работающий код</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Команда опытных разработчиков Python и JavaScript. Создаём современное ПО, автоматизируем бизнес-процессы
              и разрабатываем Telegram-ботов.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticButton
                href="#contacts"
                className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 text-base"
              >
                Обсудить проект
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </MagneticButton>
              <MagneticButton
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-primary/30 hover:bg-primary/10 font-semibold px-8 h-12 text-base bg-transparent"
              >
                Наши услуги
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
            >
              <motion.div
                ref={projectsCount.ref}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={countUp}
              >
                <p className="text-3xl font-bold text-foreground">{projectsCount.count}+</p>
                <p className="text-sm text-muted-foreground">Проектов</p>
              </motion.div>
              <div className="w-px h-12 bg-border" />
              <motion.div
                ref={yearsCount.ref}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={countUp}
              >
                <p className="text-3xl font-bold text-foreground">{yearsCount.count}+</p>
                <p className="text-sm text-muted-foreground">Лет опыта</p>
              </motion.div>
              <div className="w-px h-12 bg-border" />
              <motion.div
                ref={resultCount.ref}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={countUp}
              >
                <p className="text-3xl font-bold text-foreground">{resultCount.count}%</p>
                <p className="text-sm text-muted-foreground">Результат</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Code Animation Panel */}
          <motion.div
            className="relative hidden lg:block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
          >
            <div className="relative">
              {/* Main code window */}
              <motion.div
                className="bg-card rounded-2xl border border-border shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-red-400"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-yellow-400"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-400"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                  />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">main.py</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="flex items-center text-muted-foreground mb-2">
                    <span className="w-8 text-right mr-4 text-muted-foreground/50">1</span>
                    <span className="text-primary">{">"}</span>
                    <span className="ml-2 text-accent">{displayedCode}</span>
                    <motion.span
                      className="w-2 h-5 bg-accent ml-1"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                  <div className="flex items-center text-muted-foreground/50">
                    <span className="w-8 text-right mr-4">2</span>
                    <span># Ваш следующий проект здесь</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements with enhanced animations */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1, rotate: 360 }}
              >
                <Code2 className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                whileHover={{ scale: 1.1, rotate: -360 }}
              >
                <Zap className="w-7 h-7 text-accent" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                whileHover={{ scale: 1.15 }}
              >
                <Bot className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
