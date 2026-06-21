import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { BlogCard } from '../components/blog/BlogCard'

export const blogPosts = [
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

export function BlogPage() {
  return (
    <div className="bg-[#FAFAFA] dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <Seo
        title="Blog & Resources"
        description="Insights, tutorials, and thoughts on modern software engineering, design, and AI from the Verplexo team."
        canonical="/blog"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 mb-10 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 sm:text-5xl tracking-tight mb-4">
            Insights & Resources
          </h1>
          <p className="max-w-2xl text-lg text-zinc-500 dark:text-zinc-400 mx-auto">
            Thoughts on software engineering, design systems, and building scalable digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}
