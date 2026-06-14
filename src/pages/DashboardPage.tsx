import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { DashboardSidebar } from '../components/dashboard/DashboardSidebar'
import { ServiceCard } from '../components/dashboard/ServiceCard'

export function DashboardPage() {
  const services: any[] = []

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          <DashboardSidebar />
          
          <div className="flex-1">
            {services.length === 0 ? (
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
                {services.map((service, index) => (
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
