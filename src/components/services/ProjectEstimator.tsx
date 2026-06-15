const servicesData = [
  { id: 'web', name: 'Web Application', basePrice: 15000 },
  { id: 'mobile', name: 'Mobile App', basePrice: 25000 },
  { id: 'ai', name: 'AI Integration', basePrice: 10000 },
  { id: 'custom', name: 'Custom Platform', basePrice: 35000 },
]

export function ProjectEstimator() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-zinc-200 p-8 my-12">
      <h2 className="text-2xl font-bold text-zinc-900 mb-6">Interactive Project Estimator</h2>
      <p className="text-zinc-500">Estimator tool loading...</p>
    </div>
  )
}
