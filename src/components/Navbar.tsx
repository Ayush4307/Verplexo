import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from '../utils/ThemeContext'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()

  // Add shadow and subtle blur on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { name: 'Home',      path: '/' },
    { name: 'About',     path: '/about' },
    { name: 'Services',  path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog',      path: '/blog' },
    { name: 'Pricing',   path: '/pricing' },
  ]

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  return (
    <nav className={`border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Verplexo Logo" className="h-8 object-contain" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">VERPLEXO</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-7">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium text-sm transition-colors relative pb-0.5 ${
                  isActive(link.path)
                    ? 'text-brand border-b-2 border-brand'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-brand'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/start-a-project"
              className="bg-brand text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-hover transition-colors shadow-sm"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-brand bg-brand/5 dark:bg-brand/10'
                    : 'text-zinc-700 dark:text-zinc-300 hover:text-brand hover:bg-zinc-50 dark:hover:bg-zinc-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 mt-2">
              <Link
                to="/start-a-project"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-white bg-brand hover:bg-brand-hover transition-colors text-center"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
