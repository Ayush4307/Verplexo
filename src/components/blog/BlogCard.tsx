import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'

type Props = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
}

export function BlogCard({ slug, title, excerpt, date, readTime, category, image }: Props) {
  return (
    <Link
      to={`/blog/${slug}`}
      className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-brand/50 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
          <span>{date}</span>
          <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          <span className="flex items-center gap-1"><Clock size={14} /> {readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-brand transition-colors">
          {title}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 flex-1">
          {excerpt}
        </p>
        <div className="flex items-center text-brand font-medium text-sm mt-auto">
          Read Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
