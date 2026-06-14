import { Filter, X, ChevronDown } from 'lucide-react'

export function DashboardSidebar() {
  return (
    <div className="w-full md:w-64 flex-shrink-0 bg-white border border-zinc-200 rounded-xl p-5 h-fit shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
        <div className="flex items-center space-x-2 text-zinc-900 font-medium">
          <Filter size={18} />
          <span>Filters</span>
        </div>
        <button className="text-zinc-400 hover:text-zinc-600">
          <X size={18} />
        </button>
      </div>

      <div className="pt-6 space-y-6">
        <div>
          <input
            type="text"
            placeholder="Search services, platforms..."
            className="w-full px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent placeholder-zinc-400"
          />
        </div>

        <div>
          <div className="flex items-center justify-between cursor-pointer mb-3">
            <span className="font-medium text-sm text-zinc-900">Service Category</span>
            <ChevronDown size={16} className="text-zinc-400" />
          </div>
          <div className="space-y-2">
            {['Web Development', 'Mobile Apps', 'AI & Machine Learning', 'UI/UX Design', 'Cloud Architecture', 'DevOps'].map((category) => (
              <label key={category} className="flex items-center space-x-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-4 h-4 border border-zinc-300 rounded bg-white group-hover:border-brand">
                  <input type="checkbox" className="absolute opacity-0 w-full h-full cursor-pointer" />
                </div>
                <span className="text-sm text-zinc-600 group-hover:text-zinc-900">{category}</span>
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
    </div>
  )
}
