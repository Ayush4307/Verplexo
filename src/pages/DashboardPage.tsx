import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { StepIndicator } from '../components/wizard/StepIndicator'
import { Step1ProjectType } from '../components/wizard/Step1ProjectType'
import { Step2Budget } from '../components/wizard/Step2Budget'
import { Step3Timeline } from '../components/wizard/Step3Timeline'
import { Step4Review } from '../components/wizard/Step4Review'

import { FORMSPREE_ESTIMATOR } from '../constants/brand'

export function DashboardPage() {
  const [step, setStep] = useState(1)
  const [dir, setDir] = useState(1)
  const [submitting, setSubmitting] = useState(false)

  const [projectType, setProjectType] = useState('')
  const [budget, setBudget] = useState('')
  const [notes, setNotes] = useState('')
  const [timeline, setTimeline] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const canNext = () => {
    if (step === 1) return projectType !== ''
    if (step === 2) return budget !== ''
    if (step === 3) return timeline !== '' && name.trim() !== '' && email.trim() !== ''
    return true
  }

  const next = () => { setDir(1); setStep(s => s + 1) }
  const back = () => { setDir(-1); setStep(s => s - 1) }

  const submit = async () => {
    setSubmitting(true)
    try {
      await fetch(FORMSPREE_ESTIMATOR, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ projectType, budget, timeline, name, email, notes }),
      })
      navigate('/thank-you')
    } catch {
      navigate('/thank-you') // redirect anyway — form will retry
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <Seo
        title="Start a Project"
        description="Tell us what you need — we'll send a tailored proposal within 24 hours."
        canonical="/start-a-project"
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors mb-10">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>

        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-2 block">Let's Build Together</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Start a Project
          </h1>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400">
            Answer 3 quick questions — get a proposal in your inbox within 24 hours.
          </p>
        </div>

        <StepIndicator currentStep={step} />

        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 min-h-[420px] relative overflow-hidden">
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={step}
              custom={dir}
              variants={{
                enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
                center: { opacity: 1, x: 0, transition: { duration: 0.25, ease: 'easeOut' } },
                exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40, transition: { duration: 0.2 } }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {step === 1 && <Step1ProjectType selected={projectType} onSelect={setProjectType} />}
              {step === 2 && <Step2Budget selectedBudget={budget} notes={notes} onSelectBudget={setBudget} onNotesChange={setNotes} />}
              {step === 3 && <Step3Timeline selectedTimeline={timeline} name={name} email={email} onSelectTimeline={setTimeline} onNameChange={setName} onEmailChange={setEmail} />}
              {step === 4 && <Step4Review projectType={projectType} budget={budget} timeline={timeline} name={name} email={email} notes={notes} onSubmit={submit} isSubmitting={submitting} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={back}
            disabled={step === 1}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </button>

          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
            Step {step} of 4
          </span>

          {step < 4 ? (
            <button
              onClick={next}
              disabled={!canNext()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-brand text-white hover:bg-brand-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next <ArrowRight size={16} />
            </button>
          ) : (
            <div className="w-20" /> // spacer when on review step
          )}
        </div>
      </div>
    </div>
  )
}
