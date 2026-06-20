import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Small delay so it doesn't flash on first paint
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-colors duration-300">
        <div className="flex-1">
          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            🍪 We use essential cookies to ensure this website works correctly. We do{' '}
            <strong>not</strong> use tracking or advertising cookies.{' '}
            <Link to="/privacy" className="text-brand underline hover:no-underline font-medium">
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium transition-colors px-3 py-2"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-sm bg-brand text-white font-semibold px-5 py-2 rounded-xl hover:bg-brand-hover transition-colors"
          >
            Accept
          </button>
          <button
            onClick={decline}
            className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors ml-1"
            aria-label="Dismiss"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
