type Step = { label: string; description: string }

const steps: Step[] = [
  { label: 'Project', description: 'What do you need?' },
  { label: 'Budget', description: "What's your budget?" },
  { label: 'Timeline', description: 'When do you need it?' },
  { label: 'Review', description: 'Confirm & submit' },
]

export function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="w-full mb-10">
      <div className="flex items-center justify-between relative">
        {/* Connecting line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-zinc-200 dark:bg-zinc-800 z-0" />
        <div
          className="absolute top-5 left-0 h-0.5 bg-brand z-0 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, idx) => {
          const stepNum = idx + 1
          const isDone = stepNum < currentStep
          const isActive = stepNum === currentStep
          return (
            <div key={step.label} className="flex flex-col items-center z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                  isDone
                    ? 'bg-brand border-brand text-white'
                    : isActive
                    ? 'bg-white dark:bg-zinc-950 border-brand text-brand'
                    : 'bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-700 text-zinc-400'
                }`}
              >
                {isDone ? '✓' : stepNum}
              </div>
              <div className="mt-2 text-center hidden sm:block">
                <p className={`text-xs font-bold ${isActive ? 'text-brand' : isDone ? 'text-zinc-600 dark:text-zinc-400' : 'text-zinc-400'}`}>
                  {step.label}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
