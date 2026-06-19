import { motion } from 'framer-motion'
import { HeroSection } from '../components/home/HeroSection'
import { AboutSection } from '../components/home/AboutSection'
import { ServicesGrid } from '../components/home/ServicesGrid'
import { ContactForm } from '../components/home/ContactForm'
import { fadeIn } from '../utils/motion'
import { Seo } from '../components/Seo'

export function HomePage() {
  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <Seo
        title="Modern Software Agency"
        description="Verplexo builds scalable web applications, AI-powered solutions, and custom digital platforms for startups and creators."
        canonical="/"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <HeroSection />
      </motion.div>
      <AboutSection />
      <ServicesGrid />
      <ContactForm />
    </div>
  )
}
