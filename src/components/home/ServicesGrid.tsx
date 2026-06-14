import { Layout, Server, Database, Sparkles, Smartphone, ShieldCheck } from 'lucide-react'

export function ServicesGrid() {
  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'Scalable, performant, and secure web applications built with modern frameworks like React and Node.js.',
      icon: <Layout className="text-brand" size={24} />
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Integrate intelligent features into your products using cutting-edge machine learning models and APIs.',
      icon: <Sparkles className="text-brand" size={24} />
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile experiences designed to engage users on iOS and Android.',
      icon: <Smartphone className="text-brand" size={24} />
    },
    {
      title: 'Backend & API Architecture',
      description: 'Robust server-side architecture and REST/GraphQL APIs that power your digital platforms.',
      icon: <Server className="text-brand" size={24} />
    },
    {
      title: 'Database Design',
      description: 'Optimized SQL and NoSQL database structures for high availability and complex data relationships.',
      icon: <Database className="text-brand" size={24} />
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security implementations ensuring your customer data is safe and protected.',
      icon: <ShieldCheck className="text-brand" size={24} />
    }
  ]

  return (
    <div className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand font-semibold tracking-wide uppercase">Capabilities</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Everything you need to build the future
          </p>
          <p className="mt-4 max-w-2xl text-xl text-zinc-500 mx-auto">
            We combine innovation, performance, and clean design to deliver reliable technology solutions.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-brand/10 rounded-md shadow-sm">
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-zinc-900 tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-zinc-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
