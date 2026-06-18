import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'
import { validateContactForm, hasErrors, sanitize } from '../../utils/validation'
import type { ValidationErrors } from '../../utils/validation'

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [honeypot, setHoneypot] = useState('')
  const [fieldErrors, setFieldErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear field error on change
    if (fieldErrors[name as keyof ValidationErrors]) {
      setFieldErrors(prev => {
        const next = { ...prev }
        delete next[name as keyof ValidationErrors]
        return next
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSuccess(false)

    // Honeypot check — bots fill this hidden field, real users don't
    if (honeypot) {
      // Silently pretend success so bots think it worked
      setIsSuccess(true)
      return
    }

    // Validate all fields
    const errors = validateContactForm(formData)
    if (hasErrors(errors)) {
      setFieldErrors(errors)
      return
    }

    setFieldErrors({})
    setIsSubmitting(true)

    // Sanitize before sending
    const sanitizedData = {
      firstName: sanitize(formData.firstName.trim()),
      lastName: sanitize(formData.lastName.trim()),
      email: formData.email.trim(),
      message: sanitize(formData.message.trim())
    }

    try {
      const response = await fetch('https://formspree.io/f/your-form-id-here', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData)
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ firstName: '', lastName: '', email: '', message: '' })
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = (field: keyof ValidationErrors) =>
    `py-3 px-4 block w-full shadow-sm rounded-md outline-none transition-colors
     bg-zinc-50 dark:bg-zinc-800 border
     text-zinc-900 dark:text-zinc-100
     placeholder-zinc-400 dark:placeholder-zinc-500
     focus:ring-2 focus:ring-brand focus:border-brand
     ${fieldErrors[field]
      ? 'border-red-400 dark:border-red-500'
      : 'border-zinc-300 dark:border-zinc-700'}`

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-24 transition-colors duration-300">
      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">Ready to start your project?</h2>
          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
            Tell us about your requirements and we'll get back to you with a proposal within 24 hours.
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-900 py-8 px-6 shadow-sm rounded-2xl border border-zinc-100 dark:border-zinc-800 sm:px-10 transition-colors duration-300">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>

            {/* Honeypot — invisible to humans, bots auto-fill it */}
            <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px]">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">First name</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    maxLength={100}
                    className={inputClasses('firstName')}
                  />
                  {fieldErrors.firstName && (
                    <p className="mt-1 text-sm text-red-500">{fieldErrors.firstName}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Last name</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    maxLength={100}
                    className={inputClasses('lastName')}
                  />
                  {fieldErrors.lastName && (
                    <p className="mt-1 text-sm text-red-500">{fieldErrors.lastName}</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={254}
                  className={inputClasses('email')}
                />
                {fieldErrors.email && (
                  <p className="mt-1 text-sm text-red-500">{fieldErrors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Project details
                <span className="text-zinc-400 dark:text-zinc-500 font-normal ml-2">
                  ({formData.message.length} / 5000)
                </span>
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={5000}
                  className={inputClasses('message')}
                />
                {fieldErrors.message && (
                  <p className="mt-1 text-sm text-red-500">{fieldErrors.message}</p>
                )}
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4">
                <p className="text-sm font-medium text-red-800 dark:text-red-400">{error}</p>
              </div>
            )}

            {isSuccess && (
              <div className="rounded-md bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4">
                <p className="text-sm font-medium text-green-800 dark:text-green-400">
                  Message sent successfully! We will get back to you soon.
                </p>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
