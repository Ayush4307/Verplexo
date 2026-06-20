import { ArrowLeft, Target, Heart, Zap, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const values = [
  {
    icon: Zap,
    title: 'Speed Without Compromise',
    desc: 'We ship fast but never cut corners. Every line of code is written with the next developer in mind — clean, documented, and maintainable.',
    color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-500',
  },
  {
    icon: Target,
    title: 'Outcome Over Output',
    desc: "We don't measure success in lines of code or hours billed. We measure it in the results our clients achieve after we ship.",
    color: 'bg-brand/10 dark:bg-brand/20 text-brand',
  },
  {
    icon: Heart,
    title: 'Radical Transparency',
    desc: "No black boxes. No surprises. You always know what we're building, why, and when it lands. We communicate like partners, not contractors.",
    color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-500',
  },
  {
    icon: Users,
    title: 'Long-Term Thinking',
    desc: "We build things that last. Architecture decisions, technology choices, and documentation are all made with your future team in mind.",
    color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500',
  },
]

const team = [
  {
    name: 'Ayush Singh',
    role: 'Founder & Lead Engineer',
    initials: 'AS',
    color: 'from-violet-500 to-indigo-600',
    bio: 'Full-stack engineer with a passion for building clean, scalable products. Obsessed with developer experience and design.',
  },
  {
    name: 'Design Lead',
    role: 'UI/UX Designer',
    initials: 'DL',
    color: 'from-pink-500 to-rose-500',
    bio: 'Creates interfaces that feel intuitive and look stunning. Specialises in design systems and user research.',
  },
  {
    name: 'Backend Engineer',
    role: 'Infrastructure & APIs',
    initials: 'BE',
    color: 'from-emerald-500 to-teal-500',
    bio: 'Architects robust APIs, databases, and cloud infrastructure. If it needs to scale, it goes through them first.',
  },
]

export function AboutPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <Seo
        title="About Us"
        description="Learn about Verplexo — a modern full-stack software development company building premium digital products for ambitious teams and startups."
        canonical="/about"
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
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">Our Story</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-6">
          We build software that <span className="text-brand">actually ships.</span>
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          Verplexo was founded with one belief — that great software is the result of great people, clear communication, and genuine care for the product. We're a small, senior team that moves fast and builds things that last.
        </p>
      </motion.div>

      {/* Mission Banner */}
      <div className="bg-brand py-16 mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            "Our mission is to make world-class software development accessible to every ambitious builder — not just enterprises with million-dollar budgets."
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">What We Stand For</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50">Our core values.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {values.map((v, idx) => (
            <motion.div
              key={v.title}
              variants={fadeIn} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800"
            >
              <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-5`}>
                <v.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">{v.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">The People</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50">Meet the team.</h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Small on purpose. Every project gets senior attention, not junior overflow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              variants={fadeIn} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 text-center"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-5`}>
                <span className="text-white font-black text-2xl">{member.initials}</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-1">{member.name}</h3>
              <p className="text-brand text-xs font-semibold uppercase tracking-wider mb-4">{member.role}</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
