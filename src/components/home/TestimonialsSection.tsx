import { Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'

const testimonials = [
  {
    quote: "Verplexo delivered our platform in under 3 weeks. The quality was far beyond what we expected — clean code, fast load times, and a design our users love instantly.",
    name: "Sarah Mitchell",
    role: "CEO",
    company: "LaunchPad AI",
    initials: "SM",
    color: "bg-violet-500",
  },
  {
    quote: "We had tried two other agencies before Verplexo. Night and day difference. They understood our product vision from day one and shipped without us having to micromanage.",
    name: "James Okafor",
    role: "CTO",
    company: "NovaPay Fintech",
    initials: "JO",
    color: "bg-emerald-500",
  },
  {
    quote: "The AI integration they built for us saved our team 20+ hours a week. ROI was clear within the first month. We're already planning our next project with them.",
    name: "Priya Sharma",
    role: "Head of Operations",
    company: "ScaleFlow",
    initials: "PS",
    color: "bg-orange-500",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-white dark:bg-zinc-950 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50">
            Trusted by builders who ship fast.
          </h2>
          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Real results from real teams. Here's what our clients say after we've delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 flex flex-col"
            >
              <Quote size={28} className="text-brand mb-6 shrink-0" />
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed flex-1 mb-8">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center shrink-0`}>
                  <span className="text-white font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">{t.name}</p>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
