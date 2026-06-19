export function TrustBar() {
  const logos = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#ffffff' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Tailwind', color: '#06B6D4' },
    { name: 'Supabase', color: '#3ECF8E' },
    { name: 'Vercel', color: '#ffffff' },
    { name: 'OpenAI', color: '#10a37f' },
    { name: 'Stripe', color: '#635BFF' },
    { name: 'Figma', color: '#F24E1E' },
    { name: 'AWS', color: '#FF9900' },
  ]

  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 py-6 overflow-hidden transition-colors duration-300">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">
        Technologies We Master
      </p>
      <div className="relative flex overflow-hidden">
        {/* Duplicate logos for seamless infinite scroll */}
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 animate-marquee gap-12 pr-12"
            aria-hidden={copy === 1}
          >
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 whitespace-nowrap select-none"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: logo.color }}
                />
                <span className="text-base font-bold text-zinc-600 dark:text-zinc-300 tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
