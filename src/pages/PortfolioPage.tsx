import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export function PortfolioPage() {
  const projects = [
    { name: 'Fintech Dashboard', desc: 'Real-time analytics platform for a global bank.', type: 'Web App' },
    { name: 'HealthSync', desc: 'Cross-platform mobile app for patient monitoring.', type: 'Mobile App' },
    { name: 'AI Sales Assistant', desc: 'LLM-powered tool to automate B2B outreach.', type: 'AI Solution' },
    { name: 'Creator Marketplace', desc: 'Two-sided marketplace for social media influencers.', type: 'Web App' }
  ]

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
        <div className="py-12">
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">Recent Work</h1>
          <p className="mt-4 text-xl text-zinc-500 dark:text-zinc-400">Explore some of the scalable solutions we've delivered.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 hover:shadow-lg transition-all">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand mb-2 block">{project.type}</span>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-brand transition-colors">{project.name}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm text-zinc-400 dark:text-zinc-500 group-hover:text-brand group-hover:bg-brand/10 transition-colors">
                  <ExternalLink size={20} />
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 mb-8">{project.desc}</p>
              <div className="h-48 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-full mt-auto relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-500 font-medium">
                  Project Preview
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
