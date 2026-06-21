import { ArrowRight, Code, Cpu, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-zinc-950 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
          <main className="mx-auto max-w-7xl">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">We build scalable</span>{' '}
                <span className="block text-brand">digital platforms.</span>
              </h1>
              <p className="mt-3 text-base text-zinc-500 dark:text-zinc-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Verplexo is a modern full-stack software development company focused on building scalable web applications, AI-powered solutions, and custom digital platforms for startups and creators.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand hover:bg-brand-hover md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Start a Project
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/portfolio"
                    className="w-full flex items-center justify-center px-8 py-3 border border-zinc-200 dark:border-zinc-700 text-base font-medium rounded-full text-brand bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    See Our Work <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center p-12 transition-colors duration-300">
        <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700 flex flex-col items-center justify-center text-center transition-colors duration-300">
            <Code size={40} className="text-brand mb-4" />
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Web Apps</h3>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700 flex flex-col items-center justify-center text-center translate-y-8 transition-colors duration-300">
            <Cpu size={40} className="text-brand mb-4" />
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">AI Solutions</h3>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700 flex flex-col items-center justify-center text-center transition-colors duration-300">
            <Smartphone size={40} className="text-brand mb-4" />
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Mobile Apps</h3>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700 flex flex-col items-center justify-center text-center translate-y-8 transition-colors duration-300">
            <div className="w-10 h-10 rounded-full bg-brand/10 dark:bg-brand/20 flex items-center justify-center mb-4">
              <span className="text-brand font-bold">V</span>
            </div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Custom Dev</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
