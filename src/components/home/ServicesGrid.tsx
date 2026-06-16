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
        <div className="text-center mb-16">
          <h2 className="text-base text-brand font-semibold tracking-wide uppercase">Capabilities</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Everything you need to build the future
          </p>
          <p className="mt-4 max-w-2xl text-xl text-zinc-500 dark:text-zinc-400 mx-auto">
            We combine innovation, performance, and clean design to deliver reliable technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-brand/10 dark:bg-brand/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-brand" size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">{service.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
