import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>
      <div className="pt-16 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl tracking-tight mb-6">Terms of Service</h1>
          <p className="text-xl text-zinc-600 leading-relaxed text-left">
            By accessing this website, you are agreeing to be bound by these Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </div>
      </div>
    </div>
  )
}
