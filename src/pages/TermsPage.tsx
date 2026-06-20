import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using the Verplexo website (verplexo.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website. These terms apply to all visitors, users, and others who access the site.`,
  },
  {
    title: '2. Services',
    content: `Verplexo provides custom software development services including web applications, mobile applications, AI integrations, and related digital services. The scope, timeline, and cost of any project are governed by a separate project agreement or proposal, not by these Terms.`,
  },
  {
    title: '3. Intellectual Property',
    content: `The content on this website — including text, graphics, logos, and design — is the property of Verplexo and is protected by applicable intellectual property laws. Upon completion and full payment of a project, ownership of the deliverables transfers to the client as specified in the project agreement.`,
  },
  {
    title: '4. User Conduct',
    content: `You agree not to use this website to transmit spam, malicious code, or any content that is unlawful, harmful, or violates any applicable regulations. You agree not to attempt to gain unauthorised access to any part of this site or its related systems.`,
  },
  {
    title: '5. Disclaimer of Warranties',
    content: `This website and its content are provided on an "as is" basis without warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.`,
  },
  {
    title: '6. Limitation of Liability',
    content: `To the fullest extent permitted by law, Verplexo shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website. Our total liability for any claim arising from your use of the site shall not exceed the amount you paid us in the 30 days prior to the event giving rise to the claim.`,
  },
  {
    title: '7. Third-Party Links',
    content: `This website may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.`,
  },
  {
    title: '8. Changes to Terms',
    content: `We reserve the right to update these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site after changes are posted constitutes your acceptance of the updated terms.`,
  },
  {
    title: '9. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of the applicable jurisdiction.`,
  },
  {
    title: '10. Contact',
    content: `If you have any questions about these Terms, please contact us at legal@verplexo.com or through the contact form on our website.`,
  },
]

export function TermsPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <Seo
        title="Terms of Service"
        description="Verplexo Terms of Service — the rules and conditions for using our website and services."
        canonical="/terms"
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
            Terms of Service
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Last updated: June 2025 · Effective immediately
          </p>
          <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Please read these Terms of Service carefully before using the Verplexo website. By using the site, you confirm that you have read, understood, and agreed to these terms.
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
