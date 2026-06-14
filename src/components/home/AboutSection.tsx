export function AboutSection() {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight sm:text-4xl">
              Building the future of digital business.
            </h2>
            <p className="mt-4 text-lg text-zinc-500">
              Verplexo is more than just a software development company. We are your technical partners. We combine innovation, performance, and clean design to deliver reliable technology solutions that help brands grow in the digital world.
            </p>
            <div className="mt-8 border-t border-zinc-100 pt-8">
              <dl className="grid grid-cols-2 gap-x-8 gap-y-8">
                <div>
                  <dt className="font-semibold text-zinc-900">Innovation First</dt>
                  <dd className="mt-2 text-zinc-500 text-sm">We leverage the latest frameworks to ensure your product is future-proof.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-900">Clean Design</dt>
                  <dd className="mt-2 text-zinc-500 text-sm">UI/UX that engages users and converts visitors into loyal customers.</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 relative rounded-2xl overflow-hidden shadow-xl border border-zinc-200">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
              alt="Digital workspace with code" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent flex flex-col justify-end p-8">
              <p className="text-white font-medium text-lg tracking-wide">Scalable. Reliable. Fast.</p>
              <p className="text-zinc-300 text-sm mt-1">Delivering excellence in every line of code.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
