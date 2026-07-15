import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motion'
import { projects } from '../data/projects'

// Tech stack icons strip
const techStack = [
  'React', 'TypeScript', 'Next.js', 'Node.js',
  'Python', 'PostgreSQL', 'Supabase', 'Stripe',
  'React Native', 'Docker', 'AWS', 'OpenAI API',
]

export function PortfolioPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <Seo
        title="Our Work"
        description="Explore concept projects and technical work showcasing Verplexo's capabilities — from fintech dashboards to AI tools and mobile apps."
        canonical="/portfolio"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="py-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">Our Work</span>
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight sm:text-5xl">
            Projects & Concepts
          </h1>
          <p className="mt-4 text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl">
            A selection of technical work and concept projects that demonstrate what we build. Concept projects are clearly labeled.
          </p>

          {/* Concept project disclaimer */}
          <div className="inline-flex items-center gap-2 mt-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-amber-700 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-medium">
            <span className="text-xs uppercase tracking-wider font-bold">ℹ</span>
            All projects below are currently concept/demo work. Real client projects are added with permission.
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={fadeIn}
              className="group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient preview */}
              <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 text-8xl font-black select-none">
                    {project.name[0]}
                  </div>
                </div>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
                    {project.type}
                  </span>
                  {project.isConceptProject && (
                    <span className="text-xs font-bold uppercase tracking-wider bg-amber-400/90 text-amber-900 px-2.5 py-1 rounded-full">
                      Concept
                    </span>
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-bold bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
                    {project.stat}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-brand transition-colors">
                    {project.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 dark:text-zinc-500 group-hover:bg-brand group-hover:text-white transition-colors shrink-0 ml-3">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies We Use */}
        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="border-t border-zinc-100 dark:border-zinc-800 py-16"
        >
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">Our Stack</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
              Technologies We Use
            </h2>
            <p className="mt-3 text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
              We pick the right tool for each job — not the trendiest one.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-semibold rounded-full hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center pb-20"
        >
          <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-4">
            Have a project in mind?
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-6 max-w-md mx-auto">
            We'd love to build something great together. Tell us about your idea.
          </p>
          <Link
            to="/start-a-project"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand text-white font-semibold rounded-full hover:bg-brand-hover transition-colors shadow-sm"
          >
            Start a Project <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
