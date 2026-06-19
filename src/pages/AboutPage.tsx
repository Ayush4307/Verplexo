import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Seo
        title="About Us"
        description="Learn about Verplexo — a modern full-stack software development company building premium digital products for ambitious teams and startups."
        canonical="/about"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>
      <div className="pt-16 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl tracking-tight mb-6">About Verplexo</h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            We are a team of passionate engineers, designers, and strategists dedicated to building world-class digital products. We believe in writing clean code, designing intuitive interfaces, and delivering value that scales.
          </p>
        </div>
      </div>
    </div>
  )
}
