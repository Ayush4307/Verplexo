import { Monitor, Smartphone, BrainCircuit, ShoppingCart, Layout, HelpCircle } from 'lucide-react'

const types = [
  { id: 'web-app', label: 'Web Application', desc: 'React, Next.js, full-stack SaaS', icon: Monitor },
  { id: 'mobile-app', label: 'Mobile App', desc: 'iOS & Android with React Native', icon: Smartphone },
  { id: 'ai-tool', label: 'AI Integration', desc: 'LLMs, chatbots, automation', icon: BrainCircuit },
  { id: 'ecommerce', label: 'E-Commerce', desc: 'Shopify, custom stores, Stripe', icon: ShoppingCart },
  { id: 'landing', label: 'Landing Page', desc: 'High-converting marketing sites', icon: Layout },
  { id: 'other', label: 'Something Else', desc: "Let's talk about your idea", icon: HelpCircle },
]

type Props = {
  selected: string
  onSelect: (id: string) => void
}

export function Step1ProjectType({ selected, onSelect }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-2">What do you need built?</h2>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">Select the type of project that best describes your idea.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {types.map(({ id, label, desc, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`text-left p-5 rounded-2xl border-2 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent ${
              selected === id
                ? 'border-brand bg-brand/5 dark:bg-brand/10'
                : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-brand/50'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${
              selected === id ? 'bg-brand text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:bg-brand/10 group-hover:text-brand'
            }`}>
              <Icon size={20} />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className={`font-bold text-sm ${selected === id ? 'text-brand' : 'text-zinc-900 dark:text-zinc-50'}`}>
                {label}
              </h3>
              {selected === id && <span className="text-brand text-xs font-bold">✓</span>}
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{desc}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
