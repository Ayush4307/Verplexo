import { CheckCircle, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { motion } from 'framer-motion'
import { scaleUp } from '../utils/motion'

export function ThankYouPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen flex items-center justify-center px-4 transition-colors duration-300 py-20">
      <Seo
        title="Thank You | Verplexo"
        description="Thank you for getting in touch with Verplexo. We will be in contact shortly."
        canonical="/thank-you"
      />
      <motion.div
        variants={scaleUp}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full text-center"
      >
        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-emerald-500" />
        </div>
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
          Message Sent!
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
          Thank you for reaching out. We have received your message and our team will get back to you within 24 hours.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-brand text-white font-bold px-8 py-3 rounded-xl hover:bg-brand-hover transition-colors shadow-sm"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
