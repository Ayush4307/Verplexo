import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'A landing page or marketing site takes 5–14 days. A full web application typically takes 4–10 weeks depending on scope. We always give you a detailed timeline in our proposal.',
  },
  {
    q: 'What do you need from us to get started?',
    a: 'Just a brief: your goals, target audience, and any design references you like. We handle the rest — design, development, and deployment.',
  },
  {
    q: 'Do you work with early-stage startups?',
    a: "Absolutely. Many of our best projects started as an idea on a napkin. We're experienced at turning vague concepts into concrete, shippable products fast.",
  },
  {
    q: 'What technologies do you use?',
    a: 'We primarily build with React, Next.js, TypeScript, Tailwind CSS, Supabase, and Node.js. For AI integrations we use OpenAI and Anthropic APIs. We pick the right tool for the job, not the trendy one.',
  },
  {
    q: 'Will I own the code?',
    a: 'Yes, 100%. Upon project completion and final payment, you receive full ownership of the source code, all assets, and all credentials. No lock-in.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes. We offer monthly maintenance and support retainers for bug fixes, updates, and feature additions. We can also train your team to manage the codebase independently.',
  },
  {
    q: 'How do you handle revisions and feedback?',
    a: "We build in review checkpoints at every sprint. You give feedback, we iterate quickly. We want you to love what we ship, so we don't cut corners on communication.",
  },
  {
    q: "What's your pricing model?",
    a: "We offer fixed-price project quotes for well-scoped work, and a monthly retainer model for ongoing development. Check our Pricing page for base rates, or contact us for a custom quote.",
  },
  {
    q: 'Can you work with our existing codebase?',
    a: "Yes. We're experienced at inheriting existing projects, performing audits, refactoring, and extending them. We'll always be honest if we think a rewrite would be more efficient.",
  },
  {
    q: 'How do we communicate during the project?',
    a: "We use Slack or WhatsApp for daily async updates, weekly video calls for sprint reviews, and a shared project board (Notion or Linear) so you always know what's being worked on.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const id = q.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base pr-4">{q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-brand transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
            id={id}
          >
            <div className="px-6 pb-5 pt-2 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqSection() {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 py-24 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50">
            Questions we get asked a lot.
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            Can't find what you're looking for?{' '}
            <a href="/contact" className="text-brand hover:underline font-medium">
              Ask us directly.
            </a>
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
