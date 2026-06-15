import { useState } from 'react'

const servicesData = [
  { id: 'web', name: 'Web Application', basePrice: 15000 },
  { id: 'mobile', name: 'Mobile App', basePrice: 25000 },
  { id: 'ai', name: 'AI Integration', basePrice: 10000 },
  { id: 'custom', name: 'Custom Platform', basePrice: 35000 },
]

const addonsData = [
  { id: 'seo', name: 'SEO Optimization', price: 2000 },
  { id: 'auth', name: 'User Authentication', price: 3500 },
  { id: 'analytics', name: 'Advanced Analytics', price: 1500 },
]

export function ProjectEstimator() {
  const [selectedService, setSelectedService] = useState('web')
  const [isRushTimeline, setIsRushTimeline] = useState(false)
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])

  const calculateTotal = () => {
    let total = servicesData.find(s => s.id === selectedService)?.basePrice || 0
    if (isRushTimeline) total *= 1.5 // 50% rush fee
    selectedAddons.forEach(addonId => {
      total += addonsData.find(a => a.id === addonId)?.price || 0
    })
    return total
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-zinc-200 p-8 my-12">
      <h2 className="text-2xl font-bold text-zinc-900 mb-6">Interactive Project Estimator</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-zinc-900 mb-4">1. Select Primary Service</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesData.map(service => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`p-4 text-left border rounded-xl transition-all ${
                selectedService === service.id 
                  ? 'border-brand bg-brand/5 ring-1 ring-brand' 
                  : 'border-zinc-200 hover:border-zinc-300 bg-white'
              }`}
            >
              <div className="font-medium text-zinc-900">{service.name}</div>
              <div className="text-sm text-zinc-500 mt-1">Starting at ${service.basePrice.toLocaleString()}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-zinc-900 mb-4">2. Project Timeline</h3>
        <div className="flex gap-4">
          <button
            onClick={() => setIsRushTimeline(false)}
            className={`flex-1 p-4 text-center border rounded-xl transition-all ${!isRushTimeline ? 'border-brand bg-brand/5 ring-1 ring-brand' : 'border-zinc-200 hover:border-zinc-300 bg-white'}`}
          >
            <div className="font-medium text-zinc-900">Standard</div>
            <div className="text-sm text-zinc-500">Normal pricing</div>
          </button>
          <button
            onClick={() => setIsRushTimeline(true)}
            className={`flex-1 p-4 text-center border rounded-xl transition-all ${isRushTimeline ? 'border-brand bg-brand/5 ring-1 ring-brand' : 'border-zinc-200 hover:border-zinc-300 bg-white'}`}
          >
            <div className="font-medium text-zinc-900">Rush Priority</div>
            <div className="text-sm text-zinc-500">+50% premium</div>
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-zinc-900 mb-4">3. Optional Add-ons</h3>
        <div className="space-y-3">
          {addonsData.map(addon => (
            <label key={addon.id} className="flex items-center p-4 border border-zinc-200 rounded-xl cursor-pointer hover:border-zinc-300 transition-colors">
              <input
                type="checkbox"
                className="w-5 h-5 text-brand rounded border-zinc-300 focus:ring-brand accent-brand"
                checked={selectedAddons.includes(addon.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedAddons([...selectedAddons, addon.id])
                  } else {
                    setSelectedAddons(selectedAddons.filter(id => id !== addon.id))
                  }
                }}
              />
              <span className="ml-3 font-medium text-zinc-900">{addon.name}</span>
              <span className="ml-auto text-zinc-500">+${addon.price.toLocaleString()}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
