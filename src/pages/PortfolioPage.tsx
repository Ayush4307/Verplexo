import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const projects = [
  {
    name: 'Fintech Dashboard',
    desc: 'Real-time analytics platform for a global bank with live transaction feeds, fraud detection alerts, and custom reporting.',
    type: 'Web App',
    gradient: 'from-violet-600 to-indigo-600',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    stat: '+61% retention',
  },
  {
    name: 'HealthSync',
    desc: 'Cross-platform mobile app for patient monitoring with appointment scheduling, doctor chat, and biometric integrations.',
    type: 'Mobile App',
    gradient: 'from-emerald-500 to-teal-600',
    tags: ['React Native', 'Supabase', 'TypeScript'],
    stat: '10k+ users',
  },
  {
    name: 'AI Sales Assistant',
    desc: 'LLM-powered B2B outreach tool that researches prospects, drafts personalized emails, and tracks reply rates automatically.',
    type: 'AI Solution',
    gradient: 'from-orange-500 to-rose-500',
    tags: ['OpenAI API', 'Next.js', 'Python'],
    stat: '5x efficiency',
  },
  {
    name: 'Creator Marketplace',
    desc: 'Two-sided marketplace connecting brands with social media influencers, with escrow payments and campaign analytics.',
    type: 'Web App',
    gradient: 'from-pink-500 to-purple-600',
    tags: ['Next.js', 'Stripe', 'Supabase'],
    stat: '$2M+ transacted',
  },
]

export function PortfolioPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <Seo
        title="Recent Work"
        description="Explore scalable solutions Verplexo has delivered — from fintech dashboards and mobile apps to AI tools and creator marketplaces."
        canonical="/portfolio"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
        <div className="py-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">Our Work</span>
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">Recent Work</h1>
          <p className="mt-4 text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl">
            A selection of products we've designed, built, and shipped for clients across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient preview */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 text-8xl font-black select-none">
                    {project.name[0]}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                    {project.stat}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-brand transition-colors">
                    {project.name}
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 dark:text-zinc-500 group-hover:bg-brand group-hover:text-white transition-colors shrink-0 ml-3">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
