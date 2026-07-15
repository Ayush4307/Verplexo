import { ArrowRight, Code, Cpu, Smartphone, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const serviceCards = [
  { icon: Code,       label: 'Web Apps',     delay: 0 },
  { icon: Cpu,        label: 'AI Solutions', delay: 0.1, offset: true },
  { icon: Smartphone, label: 'Mobile Apps',  delay: 0.2 },
  { icon: Layers,     label: 'Custom Dev',   delay: 0.3, offset: true },
]

// Text stagger animation — typed to satisfy Framer Motion v12's strict Easing union
const container: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const item: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
}

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-zinc-950 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="sm:text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={item} className="mb-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 dark:bg-brand/20 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                Full-Stack Software Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl"
            >
              <span className="block">We build scalable</span>
              <span className="block text-brand">digital platforms.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={item}
              className="mt-4 text-base text-zinc-500 dark:text-zinc-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Verplexo is a modern full-stack software development company focused on building scalable web applications, AI-powered solutions, and custom digital platforms for startups and creators.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start"
            >
              <Link
                to="/start-a-project"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-full text-white bg-brand hover:bg-brand-hover md:py-4 md:text-lg md:px-10 transition-colors shadow-sm"
              >
                Start a Project
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-zinc-200 dark:border-zinc-700 text-base font-semibold rounded-full text-brand bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 md:py-4 md:text-lg md:px-10 transition-colors"
              >
                See Our Work <ArrowRight className="ml-2" size={18} />
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.p variants={item} className="mt-6 text-xs text-zinc-400 dark:text-zinc-600">
              Trusted by founders, startups &amp; product teams worldwide
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Right panel — service cards */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center p-12 transition-colors duration-300">
        <div className="grid grid-cols-2 gap-5 w-full max-w-lg">
          {serviceCards.map(({ icon: Icon, label, delay, offset }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: offset ? 32 : 0 }}
              transition={{ duration: 0.55, delay: 0.4 + delay, ease: 'easeOut' }}
              className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700 flex flex-col items-center justify-center text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 dark:bg-brand/20 flex items-center justify-center mb-3">
                <Icon size={22} className="text-brand" />
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">{label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
