import { Layout, Server, Database, Sparkles, Smartphone, ShieldCheck } from 'lucide-react'

export function ServicesGrid() {
  const services = [
    {
import { motion } from 'framer-motion'
import { staggerContainer, scaleUp } from '../../utils/motion'
import { Smartphone, MonitorSmartphone, BrainCircuit, Database, Cpu, Cloud } from 'lucide-react'

const services = [
  {
    title: 'Web Application Development',
    description: 'Custom, scalable web applications built with modern frameworks like React, Next.js, and Node.js.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Mobile App Engineering',
    description: 'Native and cross-platform mobile experiences for iOS and Android using React Native and Swift.',
    icon: Smartphone,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions integrating OpenAI, custom LLMs, and predictive analytics models.',
    icon: BrainCircuit,
  },
  {
    title: 'Cloud Architecture',
    description: 'Secure, high-availability cloud infrastructure on AWS, Google Cloud, and Azure.',
    icon: Cloud,
  },
  {
    title: 'Database Design',
    description: 'Optimized relational and NoSQL database architecture for high-performance applications.',
    icon: Database,
  },
  {
    title: 'System Integration',
    description: 'Seamless API development and legacy system modernization.',
    icon: Cpu,
  },
]

export function ServicesGrid() {
  return (
    <div className="py-24 bg-zinc-50 dark:bg-zinc-950/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand font-semibold tracking-wide uppercase">Capabilities</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl transition-colors">
            Everything you need to build the future
          </p>
          <p className="mt-4 max-w-2xl text-xl text-zinc-500 dark:text-zinc-400 mx-auto transition-colors">
            We combine innovation, performance, and clean design to deliver reliable technology solutions.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div 
                key={index} 
                variants={scaleUp}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand/10 dark:bg-brand/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-brand" size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">{service.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
