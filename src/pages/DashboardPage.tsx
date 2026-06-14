import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { DashboardSidebar } from '../components/dashboard/DashboardSidebar'
import { ServiceCard } from '../components/dashboard/ServiceCard'

export function DashboardPage() {
  const services = [
    {
      title: 'E-Commerce Platform',
      category: 'Web',
      budget: '$15,000',
      timeline: '8-12 weeks',
      teamSize: '3 Developers',
      description: 'Full-stack custom e-commerce solution with advanced inventory management and Stripe integration.',
      technologies: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'AI Customer Support Bot',
      category: 'AI',
      budget: '$8,500',
      timeline: '4-6 weeks',
      teamSize: '2 Developers',
      description: 'Custom trained LLM chatbot integrated directly into your existing website for 24/7 support.',
      technologies: ['Python', 'OpenAI API', 'FastAPI']
    },
    {
      title: 'SaaS Dashboard Application',
      category: 'Web',
      budget: '$25,000',
      timeline: '12-16 weeks',
      teamSize: '4 Developers',
      description: 'Complex multi-tenant architecture for your SaaS product with real-time analytics and billing.',
      technologies: ['Next.js', 'Tailwind', 'Supabase']
    },
    {
      title: 'Fitness Tracking Mobile App',
      category: 'Mobile',
      budget: '$18,000',
      timeline: '10-14 weeks',
      teamSize: '3 Developers',
      description: 'Cross-platform mobile app with health kit integrations and real-time workout tracking.',
      technologies: ['React Native', 'Firebase']
    }
  ]

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
