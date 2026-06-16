import { Filter, X, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '../../utils/motion'

type DashboardSidebarProps = {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategories: string[]
  setSelectedCategories: (categories: string[]) => void
}

export function DashboardSidebar({ searchQuery, setSearchQuery, selectedCategories, setSelectedCategories }: DashboardSidebarProps) {
  
  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  return (
    <motion.div 
      className="w-full md:w-64 flex-shrink-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 h-fit shadow-sm transition-colors duration-300"
      variants={slideInFromLeft}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex items-center space-x-2 text-zinc-900 dark:text-zinc-100 font-medium">
          <Filter size={18} />
          <span>Filters</span>
        </div>
        <button className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">
          <X size={18} />
        </button>
      </div>

      <div className="pt-6 space-y-6">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search services, platforms..."
            className="w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent placeholder-zinc-400 transition-colors duration-300"
          />
        </div>

        <div>
          <div className="flex items-center justify-between cursor-pointer mb-3">
            <span className="font-medium text-sm text-zinc-900 dark:text-zinc-100">Service Category</span>
            <ChevronDown size={16} className="text-zinc-400" />
          </div>
          <div className="space-y-2">
            {['Web Development', 'Mobile Apps', 'AI & Machine Learning', 'UI/UX Design', 'Cloud Architecture', 'DevOps'].map((category) => (
              <label key={category} className="flex items-center space-x-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-4 h-4 border border-zinc-300 dark:border-zinc-700 rounded bg-white dark:bg-zinc-900 group-hover:border-brand transition-colors">
                  <input 
                    type="checkbox" 
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                    className="absolute opacity-0 w-full h-full cursor-pointer" 
                  />
                  {selectedCategories.includes(category) && (
                    <div className="w-2 h-2 bg-brand rounded-sm"></div>
                  )}
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-100">
          <div className="flex items-center justify-between cursor-pointer mb-3">
            <span className="font-medium text-sm text-zinc-900">Budget Range</span>
            <ChevronDown size={16} className="text-zinc-400" />
          </div>
          <input type="range" className="w-full accent-brand cursor-pointer" min="0" max="100000" />
          <div className="flex justify-between text-xs text-zinc-500 mt-2 font-medium">
            <span>$0</span>
            <span>$100k+</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
