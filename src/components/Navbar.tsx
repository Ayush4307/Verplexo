import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Client Portal', path: '/dashboard' },
  ]

  return (
    <nav className="border-b border-zinc-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Verplexo Logo" className="h-8 object-contain" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              <span className="text-2xl font-bold text-zinc-900 tracking-tight">VERPLEXO</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-zinc-600 hover:text-brand font-medium text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-brand text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-hover transition-colors shadow-sm"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-500 hover:text-zinc-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-brand hover:bg-zinc-50"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand hover:bg-zinc-50"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
