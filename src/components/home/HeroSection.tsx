import { ArrowRight, Code, Cpu, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8">
          <main className="mx-auto max-w-7xl">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-zinc-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">We build scalable</span>{' '}
                <span className="block text-brand">digital platforms.</span>
              </h1>
              <p className="mt-3 text-base text-zinc-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
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
                    to="/dashboard"
                    className="w-full flex items-center justify-center px-8 py-3 border border-zinc-200 text-base font-medium rounded-full text-brand bg-white hover:bg-zinc-50 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Client Portal <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-zinc-50 flex items-center justify-center p-12">
        <div className="grid grid-cols-2 gap-6 w-full max-w-lg">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center justify-center text-center">
            <Code size={40} className="text-brand mb-4" />
            <h3 className="font-semibold text-zinc-900">Web Apps</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center justify-center text-center translate-y-8">
            <Cpu size={40} className="text-brand mb-4" />
            <h3 className="font-semibold text-zinc-900">AI Solutions</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center justify-center text-center">
            <Smartphone size={40} className="text-brand mb-4" />
            <h3 className="font-semibold text-zinc-900">Mobile Apps</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center justify-center text-center translate-y-8">
            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center mb-4">
              <span className="text-brand font-bold">V</span>
            </div>
            <h3 className="font-semibold text-zinc-900">Custom Dev</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
