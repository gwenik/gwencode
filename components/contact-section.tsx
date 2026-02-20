"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react"
import { fadeInLeft, fadeInRight, formSuccess, viewportOnce } from "@/lib/animations"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const telegramSendMessageUrl = process.env.NEXT_PUBLIC_BOT_TOKEN ?? ''
    const user_message = `
    Новое обращение с сайта:

    Имя: ${formData.name},
    Почта для связи: ${formData.email},
    Сообщение пользователя: ${formData.message}
    `
    fetch(telegramSendMessageUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
        text: user_message
      })
    })
    .then(response => response.json())
    .then(data => console.log('Сообщение отправлено:', data))
    .catch(error => console.error('Ошибка отправки:', error));

    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contacts" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInLeft}
          >
            <motion.h2
              variants={fadeInLeft}
              className="inline-block px-6 py-2.5 rounded-full bg-accent/30 text-accent-foreground text-lg font-bold mb-4 border-2 border-accent/50"
            >
              Контакты
            </motion.h2>
            <motion.h2
              variants={fadeInLeft}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Наши <span className="gradient-text">контакты</span>
            </motion.h2>
            <motion.p
              variants={fadeInLeft}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом — мы ответим в течение часа в рабочее
              время.
            </motion.p>

            <motion.div
              className="space-y-6"
              variants={fadeInLeft}
            >
              <motion.a
                href="https://t.me/gwencode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border transition-all group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <MessageCircle className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <p className="font-semibold text-foreground">Telegram</p>
                  <p className="text-sm text-muted-foreground">@gwencode</p>
                </div>
              </motion.a>

              {/* <motion.a
                href="mailto:hello@gcompanyit.dev"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border transition-all group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="w-6 h-6 text-accent" />
                </motion.div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">hello@gcompanyit.dev</p>
                </div>
              </motion.a> */}
            </motion.div>

            <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-foreground">
                <span className="font-semibold">💡 Совет:</span> Опишите вашу задачу максимально подробно — это поможет
                нам быстрее оценить проект и предложить оптимальное решение.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-card rounded-2xl border border-border p-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInRight}
          >
            <motion.h3
              variants={fadeInRight}
              className="text-xl font-semibold text-foreground mb-6"
            >
              Отправить заявку
            </motion.h3>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={formSuccess}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Заявка отправлена!</h4>
                  <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeInRight}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                    <Input
                      type="text"
                      placeholder="Как к вам обращаться?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </motion.div>

                  <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">Email или Telegram</label>
                    <Input
                      type="text"
                      placeholder="Как с вами связаться?"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </motion.div>

                  <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">Опишите ваш проект</label>
                    <Textarea
                      placeholder="Расскажите о вашей задаче..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </motion.div>

                  <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                  >
                    <motion.button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Отправить заявку
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="inline-block"
                      >
                        <Send className="w-4 h-4" />
                      </motion.span>
                    </motion.button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
