import { useEffect, useRef, useState } from 'react'

interface StatItem {
  value: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  { value: 50,   suffix: '+', label: 'Projects Delivered' },
  { value: 48,   suffix: 'h', label: 'To First Prototype' },
  { value: 100,  suffix: '%', label: 'Delivery Rate' },
  { value: 3,    suffix: 'x', label: 'Faster Than Average' },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          const duration = 1600
          const startTime = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(ease * value))
            if (progress < 1) requestAnimationFrame(tick)
            else setCount(value)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, started])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function StatsStrip() {
  return (
    <div className="bg-brand py-14 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-indigo-200 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
