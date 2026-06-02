import { useState, useEffect, useRef } from 'react';

interface ProcessStep {
  index: string;
  title: string;
  desc: string;
}

const steps: ProcessStep[] = [
  {
    index: '01',
    title: 'Discover',
    desc: 'We define goals, audience, constraints, and success metrics before any build begins.',
  },
  {
    index: '02',
    title: 'Design',
    desc: 'We shape the interface, motion, and content structure around a clear visual direction.',
  },
  {
    index: '03',
    title: 'Build',
    desc: 'We develop the product with performance, scalability, and maintainability in mind.',
  },
  {
    index: '04',
    title: 'Launch',
    desc: 'We QA, refine, and hand over a clean system that is ready to ship and improve.',
  },
];

const StatItem = ({ target, label }: { target: number; label: string }) => {
  const [count, setCount] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasRun) {
            setHasRun(true);
            let startTimestamp: number | null = null;
            const duration = 1400;

            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              setCount(Math.floor(progress * target));

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setCount(target);
              }
            };

            requestAnimationFrame(step);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [target, hasRun]);

  return (
    <div ref={itemRef}>
      <strong>{count}</strong>
      <span>{label}</span>
    </div>
  );
};

export const Process = () => {
  return (
    <>
      <section id="process" className="section">
        <div className="section-heading reveal">
          <span className="section-kicker">How we work</span>
          <h2>A lean process that keeps quality high and decisions visible.</h2>
        </div>

        <div className="process-grid">
          {steps.map((step, idx) => (
            <article className="process-step reveal" key={idx}>
              <span>{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stats-band reveal" aria-label="Key metrics">
        <StatItem target={14} label="days to launch a polished landing page" />
        <StatItem target={8} label="weeks for a lean product build" />
        <StatItem target={24} label="hour response time for active projects" />
      </section>
    </>
  );
};

// verplexo-optim-iter-6

// verplexo-optim-iter-18

// verplexo-optim-iter-30
