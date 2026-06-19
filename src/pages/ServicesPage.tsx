import { ServicesGrid } from '../components/home/ServicesGrid'
import { ProjectEstimator } from '../components/services/ProjectEstimator'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function ServicesPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <Seo
        title="Our Services"
        description="Explore Verplexo's flagship services — from premium marketing websites and custom web apps to AI integrations and workflow automation."
        canonical="/services"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>
      <div className="pt-8 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 sm:text-5xl tracking-tight">Our Services</h1>
          <p className="mt-4 max-w-2xl text-xl text-zinc-500 dark:text-zinc-400 mx-auto">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>
        <ServicesGrid />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <ProjectEstimator />
        </div>
      </div>
    </div>
  )
}
