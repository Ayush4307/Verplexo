import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { Seo } from '../components/Seo'
import { motion } from 'framer-motion'

export function NotFoundPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-[85vh] flex items-center justify-center transition-colors duration-300 px-4">
      <Seo
        title="404 — Page Not Found"
        description="The page you're looking for doesn't exist. Head back to Verplexo's homepage to find what you need."
      />

      <div className="text-center max-w-lg mx-auto">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative mb-8 inline-block"
        >
          <div className="w-28 h-28 bg-brand/10 dark:bg-brand/20 rounded-3xl flex items-center justify-center mx-auto rotate-3">
            <Search size={52} className="text-brand -rotate-3" />
          </div>
          <span className="absolute -top-2 -right-3 text-xs font-bold bg-brand text-white px-2 py-0.5 rounded-full">404</span>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight mb-4">
            Page not found
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-10 leading-relaxed">
            This page doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3 bg-brand text-white font-semibold rounded-full hover:bg-brand-hover transition-colors shadow-sm w-full sm:w-auto justify-center"
            >
              <Home size={18} /> Back to Home
            </Link>
            <button
              onClick={() => history.back()}
              className="inline-flex items-center gap-2 px-7 py-3 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors w-full sm:w-auto justify-center"
            >
              <ArrowLeft size={18} /> Go Back
            </button>
          </div>

          <p className="mt-10 text-sm text-zinc-400 dark:text-zinc-600">
            Need help?{' '}
            <Link to="/contact" className="text-brand hover:underline font-medium">
              Contact us
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
