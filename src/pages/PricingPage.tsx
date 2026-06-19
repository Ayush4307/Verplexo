import { Check, Zap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const tiers = [
  {
    name: 'Starter',
    price: '$2,500',
    period: 'one-time',
    desc: 'Perfect for landing pages, portfolios, and simple marketing websites.',
    badge: null,
    features: [
      'Up to 5 pages',
      'Responsive design',
      'SEO meta tags',
      'Contact form',
      'Dark mode',
      '14-day delivery',
      '1 revision round',
      'Handoff + documentation',
    ],
    cta: 'Get Started',
    highlight: false,
    color: 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800',
    ctaStyle: 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200',
  },
  {
    name: 'Growth',
    price: '$8,500',
    period: 'one-time',
    desc: 'For startups that need a full web app with auth, database, and custom logic.',
    badge: 'Most Popular',
    features: [
      'Everything in Starter',
      'Full-stack web application',
      'Supabase / PostgreSQL setup',
      'User authentication',
      'Admin dashboard',
      'API integrations',
      '30-day delivery',
      '3 revision rounds',
      '30 days post-launch support',
    ],
    cta: 'Start Building',
    highlight: true,
    color: 'bg-brand border-brand',
    ctaStyle: 'bg-white text-brand hover:bg-indigo-50',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'per project',
    desc: 'For complex platforms, AI integrations, and teams that need ongoing development.',
    badge: null,
    features: [
      'Everything in Growth',
      'AI / LLM integrations',
      'Workflow automation',
      'Multi-tenant architecture',
      'Performance optimization',
      'Dedicated Slack channel',
      'Monthly retainer available',
      'Priority support',
      'Custom timeline',
    ],
    cta: 'Contact Us',
    highlight: false,
    color: 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800',
    ctaStyle: 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200',
  },
]

export function PricingPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <Seo
        title="Pricing"
        description="Transparent, fixed pricing for every stage — from landing pages to full-stack web apps and AI integrations. No hidden fees."
        canonical="/pricing"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
            Simple, transparent pricing.
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Fixed-price quotes. No surprises. No hourly billing that spirals out of control.
            Pay for the outcome, not the hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl border-2 p-8 flex flex-col ${tier.color} ${tier.highlight ? 'shadow-2xl scale-105' : 'shadow-sm'}`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-white text-brand text-xs font-bold px-4 py-1.5 rounded-full shadow-md border border-indigo-100">
                    <Zap size={12} />
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h2 className={`text-xl font-bold mb-1 ${tier.highlight ? 'text-white' : 'text-zinc-900 dark:text-zinc-50'}`}>
                  {tier.name}
                </h2>
                <p className={`text-sm mb-4 ${tier.highlight ? 'text-indigo-200' : 'text-zinc-500 dark:text-zinc-400'}`}>
                  {tier.desc}
                </p>
                <div className="flex items-end gap-2">
                  <span className={`text-4xl font-extrabold tracking-tight ${tier.highlight ? 'text-white' : 'text-zinc-900 dark:text-zinc-50'}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm mb-1 ${tier.highlight ? 'text-indigo-200' : 'text-zinc-400'}`}>
                    / {tier.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${tier.highlight ? 'text-indigo-200' : 'text-brand'}`}
                    />
                    <span className={`text-sm ${tier.highlight ? 'text-indigo-100' : 'text-zinc-600 dark:text-zinc-400'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full inline-flex items-center justify-center py-3 px-6 rounded-xl font-semibold text-sm transition-colors ${tier.ctaStyle}`}
              >
                {tier.cta}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-zinc-400 dark:text-zinc-500 text-sm mt-12">
          All prices in USD. Need a custom quote?{' '}
          <Link to="/contact" className="text-brand hover:underline font-medium">
            Let's talk.
          </Link>
        </p>
      </div>
    </div>
  )
}
