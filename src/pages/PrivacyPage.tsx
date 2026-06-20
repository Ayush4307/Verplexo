import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when you fill out the contact form on our website — including your name, email address, company name, and project details. We do not collect any information automatically beyond standard web server logs (IP address, browser type, pages visited).`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information you submit solely to respond to your enquiry, assess project fit, and send you a proposal. We will never use your contact details for unsolicited marketing without your explicit consent.`,
  },
  {
    title: '3. Information Sharing',
    content: `We do not sell, trade, rent, or otherwise transfer your personal information to outside parties. We may share information only when required by law or to protect our rights and the rights of others.`,
  },
  {
    title: '4. Data Storage & Security',
    content: `Your form submissions are processed through Formspree (our form provider). We do not store personal data on our own servers beyond what is necessary for ongoing communication. All data in transit is protected via HTTPS/TLS encryption.`,
  },
  {
    title: '5. Cookies',
    content: `This website does not use tracking cookies or analytics cookies. We do not use Google Analytics, Facebook Pixel, or any third-party tracking tools. The only cookies present are those technically required for the site to function.`,
  },
  {
    title: '6. Your Rights',
    content: `You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us at privacy@verplexo.com and we will respond within 30 days.`,
  },
  {
    title: '7. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the date at the bottom of this page. Continued use of the website constitutes acceptance of the updated policy.`,
  },
  {
    title: '8. Contact',
    content: `If you have any questions about this Privacy Policy, please contact us at privacy@verplexo.com or via the contact form on our website.`,
  },
]

export function PrivacyPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <Seo
        title="Privacy Policy"
        description="Verplexo Privacy Policy — how we collect, use, and protect your personal information."
        canonical="/privacy"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">Legal</span>
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Last updated: June 2025 · Effective immediately
          </p>
          <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            At Verplexo, your privacy is important to us. This policy explains what information we collect, how we use it, and the choices you have. We keep it plain and simple — no legal jargon designed to confuse.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-3">{section.title}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
