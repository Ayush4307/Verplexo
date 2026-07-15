// Portfolio projects data.
// - Real client work: include with permission.
// - Concept/demo work: always label with isConceptProject: true — displayed as "Concept Project".
// This prevents misleading visitors about actual shipped work.

export interface Project {
  name: string
  desc: string
  type: string
  gradient: string
  tags: string[]
  stat: string
  isConceptProject?: boolean
}

export const projects: Project[] = [
  {
    name: 'Fintech Dashboard',
    desc: 'Real-time analytics platform concept with live transaction feeds, fraud detection alerts, and custom reporting modules.',
    type: 'Web App',
    gradient: 'from-violet-600 to-indigo-600',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    stat: '+61% retention',
    isConceptProject: true,
  },
  {
    name: 'HealthSync',
    desc: 'Cross-platform mobile app concept for patient monitoring with appointment scheduling, doctor chat, and biometric integrations.',
    type: 'Mobile App',
    gradient: 'from-emerald-500 to-teal-600',
    tags: ['React Native', 'Supabase', 'TypeScript'],
    stat: '10k+ users',
    isConceptProject: true,
  },
  {
    name: 'AI Sales Assistant',
    desc: 'LLM-powered B2B outreach tool concept that researches prospects, drafts personalized emails, and tracks reply rates automatically.',
    type: 'AI Solution',
    gradient: 'from-orange-500 to-rose-500',
    tags: ['OpenAI API', 'Next.js', 'Python'],
    stat: '5x efficiency',
    isConceptProject: true,
  },
  {
    name: 'Creator Marketplace',
    desc: 'Two-sided marketplace concept connecting brands with social media influencers, with escrow payments and campaign analytics.',
    type: 'Web App',
    gradient: 'from-pink-500 to-purple-600',
    tags: ['Next.js', 'Stripe', 'Supabase'],
    stat: '$2M+ transacted',
    isConceptProject: true,
  },
  {
    name: 'E-Commerce Storefront',
    desc: 'High-performance Shopify-alternative storefront concept with product search, cart, and optimized checkout — built for speed.',
    type: 'Web App',
    gradient: 'from-amber-500 to-orange-500',
    tags: ['Next.js', 'Prisma', 'Stripe'],
    stat: '98 Perf. score',
    isConceptProject: true,
  },
  {
    name: 'DevOps Monitoring Hub',
    desc: 'Internal tooling concept for engineering teams — real-time CI/CD pipeline visibility, alert routing, and incident management.',
    type: 'Internal Tool',
    gradient: 'from-sky-500 to-blue-600',
    tags: ['React', 'Grafana', 'Python', 'Docker'],
    stat: '40% faster MTTR',
    isConceptProject: true,
  },
]
