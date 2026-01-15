import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { WhyUsSection } from "@/components/why-us-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <ServicesSection />
        <ProjectsSection />
        <WhyUsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
