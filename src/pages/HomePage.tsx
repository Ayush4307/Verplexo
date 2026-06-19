import { HeroSection } from '../components/home/HeroSection'
import { TrustBar } from '../components/home/TrustBar'
import { StatsStrip } from '../components/home/StatsStrip'
import { ServicesGrid } from '../components/home/ServicesGrid'
import { HowItWorks } from '../components/home/HowItWorks'
import { TestimonialsSection } from '../components/home/TestimonialsSection'
import { FaqSection } from '../components/home/FaqSection'
import { CtaBanner } from '../components/home/CtaBanner'
import { Seo } from '../components/Seo'

export function HomePage() {
  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <Seo
        title="Modern Software Agency"
        description="Verplexo builds scalable web applications, AI-powered solutions, and custom digital platforms for startups and creators."
        canonical="/"
      />
      <HeroSection />
      <TrustBar />
      <StatsStrip />
      <ServicesGrid />
      <HowItWorks />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
    </div>
  )
}
