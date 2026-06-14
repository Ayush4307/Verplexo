import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ContactForm } from '../components/home/ContactForm'

export function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
        <div className="py-12 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-1">
            <h1 className="text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">Get in Touch</h1>
            <p className="text-lg text-zinc-500 mb-8">
              Whether you need a new web application, a mobile app, or an AI solution, our team is ready to help you build the future.
            </p>
            <div className="space-y-6">
              <div className="flex items-center text-zinc-600">
                <Mail className="text-brand mr-4" size={24} />
                <span>verplexo@gmail.com</span>
              </div>
              <div className="flex items-center text-zinc-600">
                <Phone className="text-brand mr-4" size={24} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-zinc-600">
                <MapPin className="text-brand mr-4" size={24} />
                <span>123 Innovation Drive<br/>Tech City, TC 90210</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 mt-12 lg:mt-0">
            <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
                <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
