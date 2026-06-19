import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function CareersPage() {
  return (
    <div className="bg-white min-h-screen">
      <Seo
        title="Careers"
        description="Join the Verplexo team. We're looking for talented engineers, designers, and builders who want to craft premium digital products."
        canonical="/careers"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>
      <div className="pt-16 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl tracking-tight mb-6">Careers</h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            We are always looking for talented individuals to join our team. While we don't have any open positions right now, feel free to drop us an email with your resume!
          </p>
        </div>
      </div>
    </div>
  )
}
