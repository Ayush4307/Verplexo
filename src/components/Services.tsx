import { useRef, useState } from 'react';

interface FlagshipService {
  badge: string;
  badgeType: 'primary' | 'secondary' | 'accent';
  model: string;
  title: string;
  kicker: string;
  desc: string;
  specs: { label: string; value: string }[];
}

const services: FlagshipService[] = [
  {
    badge: 'Fast & Smooth',
    badgeType: 'primary',
    model: 'Model V-Core',
    title: 'Verplexo Core',
    kicker: 'Premium Marketing & Brand Websites',
    desc: 'High-converting experiences with custom web aesthetics, blazing-fast speed, and immaculate SEO optimization.',
    specs: [
      { label: 'Performance Score', value: '100 / 100' },
      { label: 'First Paint', value: '< 0.2s' },
      { label: 'Stack', value: 'Next.js / Vanilla' },
    ],
  },
  {
    badge: 'Peak Power',
    badgeType: 'secondary',
    model: 'Model V-Scale',
    title: 'Verplexo Scale',
    kicker: 'Custom High-Performance Web Apps',
    desc: 'Robust customer portals, interactive dashboards, real-time sync systems, and secure full-stack software architectures.',
    specs: [
      { label: 'Architecture', value: 'Serverless / Edge' },
      { label: 'Databases', value: 'Supabase / SQL' },
      { label: 'Launch Cycle', value: '14 - 30 days' },
    ],
  },
  {
    badge: 'Next-Gen AI',
    badgeType: 'accent',
    model: 'Model V-Intel',
    title: 'Verplexo Intelligence',
    kicker: 'AI Integrations & Workflow Automation',
    desc: 'Leverage large language models, custom AI agents, automated data scraping pipelines, and intelligent operations scaling.',
    specs: [
      { label: 'AI Model', value: 'LLMs / Agents' },
      { label: 'Efficiency Gain', value: 'Up to 5x' },
      { label: 'Integrations', value: 'REST / Webhooks' },
    ],
  },
];

export const Services = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handlePrev = () => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.querySelector('.flagship-card') as HTMLDivElement | null;
    const cardWidth = firstCard?.offsetWidth || 390;
    sliderRef.current.scrollBy({ left: -cardWidth - 24, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.querySelector('.flagship-card') as HTMLDivElement | null;
    const cardWidth = firstCard?.offsetWidth || 390;
    sliderRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
  };

  return (
    <section id="services" className="section">
      <div className="section-heading reveal">
        <span className="section-kicker">Flagship Services</span>
        <h2>Never Settle. High-velocity engineering, built to perform.</h2>
        <p>
          Verplexo delivers premium software, high-performance web systems, and AI-driven platforms. Explore our flagship product tiers designed for ambitious teams.
        </p>
      </div>

      <div className="slider-controls reveal">
        <span className="slider-indicator">Flagship Series 2026</span>
        <div className="slider-buttons">
          <button
            className="slider-btn prev-btn"
            aria-label="Previous Slide"
            onClick={handlePrev}
          >
            &larr;
          </button>
          <button
            className="slider-btn next-btn"
            aria-label="Next Slide"
            onClick={handleNext}
          >
            &rarr;
          </button>
        </div>
      </div>

      <div className="services-slider-container reveal">
        <div
          className={`services-slider ${isDown ? 'active' : ''}`}
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {services.map((service, idx) => (
            <article className="flagship-card" data-index={idx} key={idx}>
              <div className="card-glow"></div>
              <div className="flagship-header">
                <span className={`badge badge-${service.badgeType}`}>
                  {service.badge}
                </span>
                <span className="card-series">{service.model}</span>
              </div>
              <div className="flagship-body">
                <h3>{service.title}</h3>
                <p className="flagship-kicker">{service.kicker}</p>
                <p className="flagship-desc">{service.desc}</p>

                <div className="flagship-specs">
                  {service.specs.map((spec, sIdx) => (
                    <div className="spec-row" key={sIdx}>
                      <span>{spec.label}</span>
                      <strong>{spec.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flagship-footer">
                <a className="flagship-link" href="#contact">
                  Configure & Build &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
