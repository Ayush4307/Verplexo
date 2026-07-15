// Blog post data — extracted to its own file to satisfy React Fast Refresh rules.
// BlogPage.tsx can only export components; constants must live in data files.

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-we-chose-react-and-vite',
    title: 'Why we use React and Vite for scalable web applications',
    excerpt: 'A deep dive into our modern tech stack and why moving away from traditional bundlers drastically improved our shipping speed.',
    date: 'Jun 12, 2026',
    readTime: '5 min read',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800'
  },
  {
    slug: 'future-of-ai-in-saas',
    title: 'The Future of AI in SaaS: Beyond the Chatbot',
    excerpt: 'How we are integrating LLMs into core business workflows to create intelligent applications that actually save time.',
    date: 'May 28, 2026',
    readTime: '7 min read',
    category: 'AI Trends',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    slug: 'design-systems-that-scale',
    title: 'Building Design Systems that Scale with Your Team',
    excerpt: 'Stop writing custom CSS for every button. Here is how we build robust design tokens using Tailwind and Figma.',
    date: 'Apr 15, 2026',
    readTime: '6 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
  },
  {
    slug: 'mobile-app-vs-pwa',
    title: 'Native App vs PWA: What should you build first?',
    excerpt: 'The age-old debate. We break down the costs, time-to-market, and user experience differences for startups in 2026.',
    date: 'Mar 02, 2026',
    readTime: '8 min read',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800'
  }
]
