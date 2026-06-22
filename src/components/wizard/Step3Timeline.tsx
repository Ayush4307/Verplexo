const timelines = [
  { id: 'asap', label: 'ASAP', desc: 'I need this as soon as possible', emoji: '🔥' },
  { id: '1-2-months', label: '1–2 Months', desc: 'Fairly urgent but flexible', emoji: '⚡' },
  { id: '3-6-months', label: '3–6 Months', desc: 'Standard project timeline', emoji: '📅' },
  { id: 'flexible', label: 'Flexible', desc: "I'm not in a rush", emoji: '😌' },
]

type Props = {
  selectedTimeline: string
  name: string
  email: string
  onSelectTimeline: (id: string) => void
  onNameChange: (val: string) => void
  onEmailChange: (val: string) => void
}

export function Step3Timeline({ selectedTimeline, name, email, onSelectTimeline, onNameChange, onEmailChange }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-2">When do you need it?</h2>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">Give us a sense of urgency so we can plan accordingly.</p>

      <div className="grid grid-cols-2 gap-3 mb-10">
        {timelines.map(({ id, label, desc, emoji }) => (
          <button
            key={id}
            onClick={() => onSelectTimeline(id)}
            className={`text-left p-5 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent ${
              selectedTimeline === id
                ? 'border-brand bg-brand/5 dark:bg-brand/10'
                : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-brand/50'
            }`}
          >
            <div className="text-2xl mb-2">{emoji}</div>
            <p className={`font-bold text-sm mb-1 ${selectedTimeline === id ? 'text-brand' : 'text-zinc-900 dark:text-zinc-50'}`}>{label}</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{desc}</p>
          </button>
        ))}
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 mb-1">Your contact details</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">We'll send you a proposal within 24 hours.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wider">Name *</label>
            <input
              type="text"
              value={name}
              onChange={e => onNameChange(e.target.value)}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand text-sm transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wider">Email *</label>
            <input
              type="email"
              value={email}
              onChange={e => onEmailChange(e.target.value)}
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand text-sm transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
