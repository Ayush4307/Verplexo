import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { DashboardSidebar } from '../components/dashboard/DashboardSidebar'
import { ServiceCard } from '../components/dashboard/ServiceCard'

import { useState } from 'react'

const initialServices = [
  {
    title: 'E-Commerce Platform Redesign',
    category: 'Web Development',
    budget: '$15k - $25k',
    timeline: '3 Months',
    description: 'Complete overhaul of the existing e-commerce platform using Next.js and Stripe.',
    teamSize: '3 Developers',
    technologies: ['Next.js', 'React', 'Stripe']
  },
  {
    title: 'Healthcare Mobile App',
    category: 'Mobile Apps',
    budget: '$30k - $50k',
    timeline: '6 Months',
    description: 'A comprehensive telemedicine mobile app for patient-doctor consultations.',
    teamSize: '4 Developers',
    technologies: ['React Native', 'Node.js', 'WebRTC']
  },
  {
    title: 'AI Customer Support Bot',
    category: 'AI & Machine Learning',
    budget: '$10k - $15k',
    timeline: '2 Months',
    description: 'Intelligent chatbot integrated with OpenAI API to handle tier-1 customer inquiries.',
    teamSize: '2 Developers',
    technologies: ['Python', 'OpenAI', 'AWS']
  }
]

export function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [services, setServices] = useState(initialServices)

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(service.category)
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          <DashboardSidebar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
          <div className="flex-1">
            {filteredServices.length === 0 ? (
              <div className="bg-white border border-zinc-200 rounded-xl p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">📁</span>
                </div>
                <h3 className="text-lg font-medium text-zinc-900 mb-2">No active projects</h3>
                <p className="text-zinc-500 max-w-sm mx-auto">
                  You don't have any active projects yet. When you request a service, it will appear here.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredServices.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
