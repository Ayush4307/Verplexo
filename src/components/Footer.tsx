import { Link } from 'react-router-dom'
import { Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

export function Footer() {
  return (
    <motion.footer 
      className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center group">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center mr-2 group-hover:scale-105 transition-transform">
                <Rocket size={18} className="text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-100">Verplexo</span>
            </Link>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              Building the future of digital experiences with clean code and modern design.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link to="/services" className="hover:text-brand transition-colors">Web Applications</Link></li>
              <li><Link to="/services" className="hover:text-brand transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="hover:text-brand transition-colors">AI Solutions</Link></li>
              <li><Link to="/services" className="hover:text-brand transition-colors">Custom Digital Platforms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link to="/about" className="hover:text-brand transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand transition-colors">Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-brand transition-colors">Pricing</Link></li>
              <li><Link to="/careers" className="hover:text-brand transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-brand transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link to="/privacy" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} Verplexo. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-zinc-400 dark:text-zinc-500">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
