import { Zap, Palette, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'

const steps = [
  {
    icon: Zap,
    step: '01',
    title: 'Brief',
    desc: 'Tell us your idea, goals, and timeline. We ask the right questions to fully understand your vision before writing a single line of code.',
    color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-500',
  },
  {
    icon: Palette,
    step: '02',
    title: 'Build',
    desc: 'Our team designs and engineers your product in fast, transparent sprints. You see progress daily — no black boxes, no surprises.',
    color: 'bg-brand/10 dark:bg-brand/20 text-brand',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Launch',
    desc: 'We QA every detail, deploy to production, and hand over a clean, documented codebase that your team can confidently maintain and grow.',
    color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-900 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50">
            From idea to live product in 3 steps.
          </h2>
          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            A lean, battle-tested process that delivers quality fast, with full visibility at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-zinc-200 dark:bg-zinc-700" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.15 }}
              className="relative bg-white dark:bg-zinc-800 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-700 shadow-sm text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center`}>
                  <step.icon size={26} />
                </div>
              </div>
              <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 tracking-widest uppercase mb-2 block">
                Step {step.step}
              </span>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">{step.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
