import { ArrowLeft, ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const openRoles = [
  {
    title: 'Senior Full-Stack Engineer',
    type: 'Full-time · Remote',
    location: 'Worldwide',
    desc: 'Build and ship high-quality web applications using React, Next.js, Node.js, and Supabase. You will work directly with clients and own features end-to-end.',
    tags: ['React', 'TypeScript', 'Node.js', 'Supabase'],
    badge: 'Hiring',
    badgeColor: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time · Remote',
    location: 'Worldwide',
    desc: 'Design beautiful, functional interfaces for our client projects. You will run user research, create wireframes, build design systems, and collaborate closely with engineers.',
    tags: ['Figma', 'Design Systems', 'User Research', 'Prototyping'],
    badge: 'Hiring',
    badgeColor: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
  },
  {
    title: 'AI / ML Engineer',
    type: 'Contract · Remote',
    location: 'Worldwide',
    desc: 'Integrate LLMs and AI tools into client products. Build pipelines, fine-tune models, and architect AI-powered workflows using OpenAI, Anthropic, and LangChain.',
    tags: ['Python', 'OpenAI API', 'LangChain', 'FastAPI'],
    badge: 'Coming Soon',
    badgeColor: 'bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400',
  },
]

const perks = [
  { emoji: '🌍', title: '100% Remote', desc: 'Work from anywhere in the world. We care about output, not office hours.' },
  { emoji: '⚡', title: 'Fast Shipping Culture', desc: 'No bureaucracy. No pointless meetings. We build and ship.' },
  { emoji: '💰', title: 'Competitive Pay', desc: 'Market-rate salaries with performance bonuses tied to project outcomes.' },
  { emoji: '📚', title: 'Learning Budget', desc: '$500/year for courses, books, or conferences of your choice.' },
  { emoji: '🛠️', title: 'Top-Tier Tooling', desc: 'Best-in-class tools — whatever makes you most productive.' },
  { emoji: '🤝', title: 'Senior Team Only', desc: 'Work alongside experienced engineers and designers. No junior overflow.' },
]

export function CareersPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <Seo
        title="Careers"
        description="Join the Verplexo team. We're looking for talented engineers, designers, and builders who want to craft premium digital products."
        canonical="/careers"
      />

      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero */}
      <motion.div
        variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 text-center"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">Join Us</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-6">
          Build the future with us.
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          We're a small, senior team that ships premium software for ambitious clients. If you care deeply about craft, communication, and impact — you'll fit right in.
        </p>
      </motion.div>

      {/* Perks */}
      <div className="bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 py-16 mb-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50">Why Verplexo?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {perks.map((perk, idx) => (
              <motion.div
                key={perk.title}
                variants={fadeIn} initial="hidden" whileInView="visible"
                viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                className="bg-white dark:bg-zinc-800 rounded-xl p-6 border border-zinc-200 dark:border-zinc-700"
              >
                <div className="text-3xl mb-3">{perk.emoji}</div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-1">{perk.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Roles */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">Open Positions</span>
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">Current openings.</h2>
        </div>

        <div className="space-y-6">
          {openRoles.map((role, idx) => (
            <motion.div
              key={role.title}
              variants={fadeIn} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 group hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{role.title}</h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${role.badgeColor}`}>
                      {role.badge}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1"><Briefcase size={14} />{role.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} />{role.location}</span>
                    <span className="flex items-center gap-1"><Clock size={14} />Open now</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-hover transition-colors shrink-0"
                >
                  Apply <ArrowRight size={15} />
                </Link>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-5">{role.desc}</p>
              <div className="flex flex-wrap gap-2">
                {role.tags.map(tag => (
                  <span key={tag} className="text-xs bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* General application */}
        <div className="mt-12 bg-brand rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Don't see your role?</h3>
          <p className="text-indigo-200 mb-6 max-w-md mx-auto">
            We're always open to hearing from exceptional people. Send us your portfolio and tell us what you'd build at Verplexo.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand font-bold px-8 py-3 rounded-xl hover:bg-zinc-100 transition-colors"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
