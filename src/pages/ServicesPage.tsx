import { ServicesGrid } from '../components/home/ServicesGrid'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>
      <div className="pt-8 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl tracking-tight">Our Services</h1>
          <p className="mt-4 max-w-2xl text-xl text-zinc-500 mx-auto">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>
        <ServicesGrid />
      </div>
    </div>
  )
}
