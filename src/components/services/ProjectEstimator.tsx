import { useState } from 'react'
import { motion } from 'framer-motion'
import { scaleUp } from '../../utils/motion'

export function ProjectEstimator() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isRushTimeline, setIsRushTimeline] = useState(false)
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])

  const servicesData = [
    { id: 'web', name: 'Web Application', basePrice: 15000 },
    { id: 'mobile', name: 'Mobile App', basePrice: 25000 },
    { id: 'ai', name: 'AI Integration', basePrice: 10000 },
    { id: 'custom', name: 'Custom Platform', basePrice: 35000 },
  ]

  const addonsData = [
    { id: 'auth', name: 'Advanced Authentication (SSO, MFA)', price: 2500 },
    { id: 'payments', name: 'Payment Gateway Integration', price: 3000 },
    { id: 'admin', name: 'Custom Admin Dashboard', price: 5000 },
    { id: 'analytics', name: 'Advanced Analytics Tracking', price: 2000 },
  ]

  const calculateTotal = () => {
    let total = 0
    if (selectedService) {
      const service = servicesData.find(s => s.id === selectedService)
      if (service) total += service.basePrice
    }
    
    addonsData.forEach(addon => {
      if (selectedAddons.includes(addon.id)) {
        total += addon.price
      }
    })

    if (isRushTimeline) {
      total *= 1.5 // 50% premium for rush
    }

    return total
  }

  return (
    <motion.div 
      className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 p-8 my-12 transition-colors duration-300"
      variants={scaleUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Interactive Project Estimator</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">1. Select Primary Service</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesData.map(service => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`p-4 text-left border rounded-xl transition-all ${
                selectedService === service.id 
                  ? 'border-brand bg-brand/5 dark:bg-brand/10 ring-1 ring-brand' 
                  : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 bg-white dark:bg-zinc-800'
              }`}
            >
              <div className="font-medium text-zinc-900 dark:text-zinc-100">{service.name}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Starting at ${service.basePrice.toLocaleString()}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">2. Project Timeline</h3>
        <div className="flex gap-4">
          <button
            onClick={() => setIsRushTimeline(false)}
            className={`flex-1 p-4 text-center border rounded-xl transition-all ${!isRushTimeline ? 'border-brand bg-brand/5 dark:bg-brand/10 ring-1 ring-brand' : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 bg-white dark:bg-zinc-800'}`}
          >
            <div className="font-medium text-zinc-900 dark:text-zinc-100">Standard</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">Normal pricing</div>
          </button>
          <button
            onClick={() => setIsRushTimeline(true)}
            className={`flex-1 p-4 text-center border rounded-xl transition-all ${isRushTimeline ? 'border-brand bg-brand/5 dark:bg-brand/10 ring-1 ring-brand' : 'border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 bg-white dark:bg-zinc-800'}`}
          >
            <div className="font-medium text-zinc-900 dark:text-zinc-100">Rush Priority</div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">+50% premium</div>
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">3. Optional Add-ons</h3>
        <div className="space-y-3">
          {addonsData.map(addon => (
            <label key={addon.id} className="flex items-center p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl cursor-pointer hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors bg-white dark:bg-zinc-800">
              <input
                type="checkbox"
                className="w-5 h-5 text-brand rounded border-zinc-300 dark:border-zinc-600 dark:bg-zinc-900 focus:ring-brand accent-brand"
                checked={selectedAddons.includes(addon.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedAddons([...selectedAddons, addon.id])
                  } else {
                    setSelectedAddons(selectedAddons.filter(id => id !== addon.id))
                  }
                }}
              />
              <span className="ml-3 font-medium text-zinc-900 dark:text-zinc-100">{addon.name}</span>
              <span className="ml-auto text-zinc-500 dark:text-zinc-400">+${addon.price.toLocaleString()}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-zinc-50 dark:bg-zinc-950/50 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800">
          <div>
            <h3 className="text-zinc-500 dark:text-zinc-400 font-medium text-sm uppercase tracking-wider mb-1">Estimated Total</h3>
            <div className="text-4xl font-extrabold text-brand">
              ${calculateTotal().toLocaleString()}
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
              This is a rough estimate. Final pricing depends on project scope.
            </p>
          </div>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="w-full md:w-auto bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-xl font-medium shadow-md transition-colors whitespace-nowrap"
          >
            Request Formal Quote
          </button>
        </div>
      </div>
    </motion.div>
  )
}
