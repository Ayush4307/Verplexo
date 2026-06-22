const labelMap: Record<string, string> = {
  'web-app': 'Web Application',
  'mobile-app': 'Mobile App',
  'ai-tool': 'AI Integration',
  'ecommerce': 'E-Commerce',
  'landing': 'Landing Page',
  'other': 'Something Else',
  'under-5k': 'Under $5,000',
  '5k-15k': '$5,000 – $15,000',
  '15k-30k': '$15,000 – $30,000',
  '30k-60k': '$30,000 – $60,000',
  '60k-plus': '$60,000+',
  'asap': 'ASAP 🔥',
  '1-2-months': '1–2 Months ⚡',
  '3-6-months': '3–6 Months 📅',
  'flexible': 'Flexible 😌',
}

type Props = {
  projectType: string
  budget: string
  timeline: string
  name: string
  email: string
  notes: string
  onSubmit: () => void
  isSubmitting: boolean
}

export function Step4Review({ projectType, budget, timeline, name, email, notes, onSubmit, isSubmitting }: Props) {
  const rows = [
    { label: 'Project Type', value: labelMap[projectType] },
    { label: 'Budget', value: labelMap[budget] },
    { label: 'Timeline', value: labelMap[timeline] },
    { label: 'Name', value: name },
    { label: 'Email', value: email },
    ...(notes ? [{ label: 'Notes', value: notes }] : []),
  ]

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-2">Review & Submit</h2>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">Everything look good? Hit submit and we'll be in touch within 24 hours.</p>

      <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden mb-8">
        {rows.map((row, idx) => (
          <div
            key={row.label}
            className={`flex flex-col sm:flex-row sm:items-start px-6 py-4 gap-1 sm:gap-4 ${
              idx !== rows.length - 1 ? 'border-b border-zinc-200 dark:border-zinc-800' : ''
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 sm:w-32 shrink-0 pt-0.5">
              {row.label}
            </span>
            <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={onSubmit}
        disabled={isSubmitting}
        className="w-full bg-brand text-white font-bold py-4 rounded-xl text-base hover:bg-brand-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand dark:focus:ring-offset-zinc-900"
      >
        {isSubmitting ? 'Sending…' : 'Submit Project Request →'}
      </button>
      <p className="text-center text-xs text-zinc-400 dark:text-zinc-500 mt-3">
        We respond within 24 hours with a tailored proposal.
      </p>
    </div>
  )
}
