import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { BlogCard } from '../components/blog/BlogCard'
import { blogPosts } from '../data/blogPosts'

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
            Insights &amp; Resources
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
