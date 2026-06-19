import { Link } from 'react-router-dom'
import { ArrowLeft, Search } from 'lucide-react'
import { Seo } from '../components/Seo'

export function NotFoundPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-[70vh] flex items-center justify-center transition-colors duration-300">
      <Seo
        title="404 — Page Not Found"
        description="The page you're looking for doesn't exist. Head back to Verplexo's homepage to find what you need."
      />
      <div className="text-center px-4">
        <div className="w-20 h-20 bg-brand/10 dark:bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <Search size={36} className="text-brand" />
        </div>

        <h1 className="text-8xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
          404
        </h1>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
          Page not found
        </h2>

        <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto mb-10 text-lg">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <Link
          to="/"
          className="inline-flex items-center px-8 py-3 bg-brand text-white font-medium rounded-full hover:bg-brand-hover transition-colors shadow-sm"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
