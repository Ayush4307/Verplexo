import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { Seo } from '../components/Seo'
import { blogPosts } from './BlogPage'
import { NotFoundPage } from './NotFoundPage'

export function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return <NotFoundPage />
  }

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pb-20 transition-colors duration-300">
      <Seo
        title={`${post.title} | Verplexo Blog`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/blog" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Blog
        </Link>

        <header className="mb-10 text-center">
          <div className="inline-block bg-brand/10 dark:bg-brand/20 text-brand px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            {post.category}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-2"><Calendar size={16} /> {post.date}</div>
            <div className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</div>
          </div>
        </header>

        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-[400px] object-cover rounded-3xl mb-12"
        />

        <div className="prose prose-zinc dark:prose-invert max-w-none prose-lg">
          <p className="lead text-xl text-zinc-600 dark:text-zinc-300 font-medium mb-8">
            {post.excerpt}
          </p>
          <p>
            When we first started building applications at Verplexo, the landscape of front-end tools was completely different. We relied heavily on older bundlers that took ages to spin up a local development environment. Today, the game has changed entirely.
          </p>
          <h2>The Need for Speed</h2>
          <p>
            Developer experience (DX) directly translates to user experience. When engineers have to wait 30 seconds for a hot module replacement (HMR), context is lost. Flow state is broken. By adopting tools that compile instantly, our team can iterate faster and build higher-quality interfaces.
          </p>
          <blockquote>
            "The tools we use shape the products we build. Slow tools lead to compromised architectures."
          </blockquote>
          <h3>What we learned</h3>
          <ul>
            <li><strong>Keep it simple:</strong> Abstractions are great until they hide performance bottlenecks.</li>
            <li><strong>Embrace native ES modules:</strong> The browser is capable of so much more now.</li>
            <li><strong>Types matter:</strong> Strict TypeScript configurations save hours of debugging in production.</li>
          </ul>
          <p>
            As we continue to build scalable digital platforms for our clients, we constantly evaluate our stack. Right now, this combination gives us the perfect balance of performance, maintainability, and developer happiness.
          </p>
        </div>
      </article>
    </div>
  )
}
