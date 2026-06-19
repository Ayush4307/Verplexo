import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CtaBanner() {
  return (
    <section className="bg-brand py-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
          Ready to build something great?
        </h2>
        <p className="text-indigo-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Tell us your idea. We'll turn it into a high-performance product — fast, clean, and built to scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-brand font-bold rounded-full text-base hover:bg-zinc-100 transition-colors shadow-lg"
          >
            Book a Free Strategy Call
            <ArrowRight size={18} className="ml-2" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/40 text-white font-semibold rounded-full text-base hover:border-white hover:bg-white/10 transition-colors"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}
