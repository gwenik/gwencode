"use client"

import { motion } from "framer-motion"
import { Terminal, Github, MessageCircle, Mail } from "lucide-react"
import { fadeInUp, iconRotate, hoverScale } from "@/lib/animations"

export function Footer() {
  return (
    <motion.footer
      className="bg-card border-t border-border py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="flex items-center gap-2"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Terminal className="w-5 h-5 text-primary-foreground" />
            </motion.div>
            <span className="text-xl font-bold text-foreground">
              GCompany<span className="gradient-text">IT</span>
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            variants={fadeInUp}
          >
            <motion.a
              href="https://github.com/gwenik"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Github className="w-5 h-5 text-foreground" />
            </motion.a>
            <motion.a
              href="https://t.me/gwencode"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <MessageCircle className="w-5 h-5 text-foreground" />
            </motion.a>
            <motion.a
              href="mailto:g-companyit@mail.ru"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Mail className="w-5 h-5 text-foreground" />
            </motion.a>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-sm text-muted-foreground"
          >
            © 2025 GCompanyIT. Все права защищены.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  )
}
