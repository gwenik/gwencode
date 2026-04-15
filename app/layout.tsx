import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin", "cyrillic"] })
const _jetbrains = JetBrains_Mono({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "gwencode",
  description:
    "Профессиональная команда разработчиков Python и JavaScript. Разработка ПО, автоматизация бизнеса, Telegram боты, веб-приложения.",
  keywords: ["разработка", "Python", "JavaScript", "автоматизация", "Telegram боты", "веб-приложения"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
