export function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="flex flex-col items-center gap-4">
        {/* Animated spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-zinc-200 dark:border-zinc-800" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand animate-spin" />
        </div>
        <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500 tracking-wide">
          Loading…
        </p>
      </div>
    </div>
  )
}
