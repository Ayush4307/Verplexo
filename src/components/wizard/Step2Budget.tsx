const budgets = [
  { id: 'under-5k', label: 'Under $5,000', desc: 'Small landing pages, fixes' },
  { id: '5k-15k', label: '$5,000 – $15,000', desc: 'MVPs and simple apps' },
  { id: '15k-30k', label: '$15,000 – $30,000', desc: 'Full web or mobile apps' },
  { id: '30k-60k', label: '$30,000 – $60,000', desc: 'Complex platforms' },
  { id: '60k-plus', label: '$60,000+', desc: 'Enterprise-scale products' },
]

type Props = {
  selectedBudget: string
  notes: string
  onSelectBudget: (id: string) => void
  onNotesChange: (val: string) => void
}

export function Step2Budget({ selectedBudget, notes, onSelectBudget, onNotesChange }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-2">What's your budget?</h2>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">This helps us scope the right solution for you. All ranges are flexible.</p>

      <div className="space-y-3 mb-8">
        {budgets.map(({ id, label, desc }) => (
          <button
            key={id}
            onClick={() => onSelectBudget(id)}
            className={`w-full text-left px-5 py-4 rounded-xl border-2 flex items-center justify-between transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent ${
              selectedBudget === id
                ? 'border-brand bg-brand/5 dark:bg-brand/10'
                : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-brand/50'
            }`}
          >
            <div>
              <p className={`font-bold text-sm ${selectedBudget === id ? 'text-brand' : 'text-zinc-900 dark:text-zinc-50'}`}>{label}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{desc}</p>
            </div>
            {selectedBudget === id && <span className="text-brand font-bold text-sm">✓</span>}
          </button>
        ))}
      </div>

      <div>
        <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
          Tell us more about your project <span className="text-zinc-400 font-normal">(optional)</span>
        </label>
        <textarea
          value={notes}
          onChange={e => onNotesChange(e.target.value)}
          rows={4}
          placeholder="Describe your idea, key features you need, or anything else that would help us understand the scope…"
          className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand text-sm resize-none transition-colors"
        />
      </div>
    </div>
  )
}
