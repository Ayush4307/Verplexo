import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ContactForm } from '../components/home/ContactForm'
import { Seo } from '../components/Seo'
import { EMAIL, PHONE, LOCATION, WHATSAPP_NUMBER, SOCIAL_LINKS } from '../constants/brand'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

// Inline SVG social icons — lucide-react v1 removed brand icons
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const contactInfo = [
  { icon: Mail,    label: EMAIL,    href: `mailto:${EMAIL}` },
  { icon: Phone,   label: PHONE,    href: `tel:${PHONE.replace(/\s/g, '')}` },
  { icon: MapPin,  label: LOCATION, href: null },
]

const socials = [
  { Icon: GithubIcon,   label: 'GitHub',   href: SOCIAL_LINKS.github },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
  { Icon: TwitterIcon,  label: 'Twitter / X',  href: SOCIAL_LINKS.twitter },
]

export function ContactPage() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to discuss a project with Verplexo.")}`

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <Seo
        title="Get in Touch"
        description="Contact Verplexo to start your project. We respond within 24 hours with a detailed proposal tailored to your requirements."
        canonical="/contact"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">

        {/* Header */}
        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-16 pt-8"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">Let's Talk</span>
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 sm:text-5xl tracking-tight mb-5">
            Get in Touch
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Whether you need a web application, a mobile app, or an AI solution — our team is ready to help you build the future.
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Left: Contact details */}
          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-1 mb-12 lg:mb-0"
          >
            <div className="space-y-5 mb-8">
              {contactInfo.map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 dark:bg-brand/20 flex items-center justify-center shrink-0">
                    <Icon className="text-brand" size={18} />
                  </div>
                  {href ? (
                    <a href={href} className="hover:text-brand transition-colors font-medium text-sm">{label}</a>
                  ) : (
                    <span className="text-sm font-medium">{label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5c] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm mb-8"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message on WhatsApp
            </a>

            {/* Social links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-4">Follow us</p>
              <div className="flex gap-3">
                {socials.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-brand hover:border-brand dark:hover:border-brand transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Estimator nudge */}
            <div className="mt-10 p-5 rounded-2xl bg-brand/5 dark:bg-brand/10 border border-brand/20">
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">Have a specific project in mind?</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">Use our project estimator to get a tailored proposal.</p>
              <Link
                to="/start-a-project"
                className="inline-flex text-xs font-semibold text-brand hover:underline"
              >
                Start the estimator →
              </Link>
            </div>
          </motion.div>

          {/* Right: Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm transition-colors duration-300">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
