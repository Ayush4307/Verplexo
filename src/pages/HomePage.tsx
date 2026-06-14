import { HeroSection } from '../components/home/HeroSection'
import { ServicesGrid } from '../components/home/ServicesGrid'
import { AboutSection } from '../components/home/AboutSection'
import { ContactForm } from '../components/home/ContactForm'

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <ContactForm />
    </div>
  )
}
