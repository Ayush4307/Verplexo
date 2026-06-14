import { Clock, Code2, Users, CheckCircle } from 'lucide-react'

type ServiceCardProps = {
  title: string
  category: string
  budget: string
  timeline: string
  description: string
  teamSize: string
  technologies: string[]
}

export function ServiceCard({ title, category, budget, timeline, description, teamSize, technologies }: ServiceCardProps) {
  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <Code2 size={18} className="text-brand" />
            <span className="text-sm font-medium text-zinc-900">{title}</span>
          </div>
          <p className="text-xs text-zinc-500">{category} Development</p>
        </div>
        <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle size={14} className="text-green-500" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-zinc-100">
        <div className="flex items-center text-sm text-zinc-600">
          <Clock size={16} className="mr-2 text-zinc-400" />
          {timeline}
        </div>
        <div className="flex items-center text-sm text-zinc-600">
          <Users size={16} className="mr-2 text-zinc-400" />
          {teamSize}
        </div>
      </div>

      <p className="text-sm text-zinc-500 mb-4 flex-grow line-clamp-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map(tech => (
          <span key={tech} className="px-2 py-1 bg-pink-50 text-pink-600 rounded text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-4">
        <div className="flex items-baseline space-x-1">
          <span className="text-xl font-bold text-zinc-900">{budget}</span>
          <span className="text-xs text-zinc-500 font-medium">USD</span>
        </div>
        <button className="bg-brand text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-hover transition-colors shadow-sm">
          More Details
        </button>
      </div>
    </div>
  )
}
