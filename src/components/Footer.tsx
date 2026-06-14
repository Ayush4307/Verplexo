import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Verplexo Logo" className="h-8 object-contain grayscale opacity-80" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              <span className="text-xl font-bold text-zinc-900 tracking-tight">VERPLEXO</span>
            </Link>
            <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
              Modern full-stack software development company building scalable digital platforms for the future.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>Web Applications</li>
              <li>Mobile Apps</li>
              <li>AI Solutions</li>
              <li>Custom Digital Platforms</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Verplexo. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-brand cursor-pointer transition-colors">Twitter</span>
            <span className="hover:text-brand cursor-pointer transition-colors">LinkedIn</span>
            <span className="hover:text-brand cursor-pointer transition-colors">GitHub</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
