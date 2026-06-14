import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="bg-zinc-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">Ready to start your project?</h2>
          <p className="mt-4 text-lg text-zinc-500">
            Tell us about your requirements and we'll get back to you with a proposal within 24 hours.
          </p>
        </div>
        <div className="bg-white py-8 px-6 shadow-sm rounded-2xl border border-zinc-100 sm:px-10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-zinc-700">First name</label>
                <div className="mt-1">
                  <input 
                    type="text" 
                    name="firstName" 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-brand focus:border-brand border-zinc-300 rounded-md bg-zinc-50 outline-none" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-zinc-700">Last name</label>
                <div className="mt-1">
                  <input 
                    type="text" 
                    name="lastName" 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-brand focus:border-brand border-zinc-300 rounded-md bg-zinc-50 outline-none" 
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email</label>
              <div className="mt-1">
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand focus:border-brand border-zinc-300 rounded-md bg-zinc-50 outline-none" 
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700">Project details</label>
              <div className="mt-1">
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand focus:border-brand border-zinc-300 rounded-md bg-zinc-50 outline-none"
                />
              </div>
            </div>

            <div>
              <button type="button" className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand transition-colors">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
