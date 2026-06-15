import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function PrivacyPage() {
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
          <h1 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-xl text-zinc-600 leading-relaxed text-left">
            Your privacy is critically important to us. At Verplexo, we have a few fundamental principles:
            <br /><br />
            - We don't ask you for personal information unless we truly need it.
            <br />
            - We don't share your personal information with anyone except to comply with the law, develop our products, or protect our rights.
            <br />
            - We don't store personal information on our servers unless required for the on-going operation of one of our services.
          </p>
        </div>
      </div>
    </div>
  )
}
