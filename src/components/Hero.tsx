import { useEffect, useRef } from 'react';

export const Hero = () => {
  const backdropARef = useRef<HTMLDivElement>(null);
  const backdropBRef = useRef<HTMLDivElement>(null);
  const visualShellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 .. 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      if (backdropARef.current) {
        backdropARef.current.style.transform = `translate(${x * 8}px, ${y * 6}px)`;
      }
      if (backdropBRef.current) {
        backdropBRef.current.style.transform = `translate(${x * -10}px, ${y * -6}px)`;
      }
      if (visualShellRef.current) {
        visualShellRef.current.style.transform = `rotateX(${y * 2}deg) rotateY(${x * 3}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Subtle idle animation
    let lastX = 0, lastY = 0;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    let animationId: number;

    const idleLoop = () => {
      lastX = lerp(lastX, 0, 0.02);
      lastY = lerp(lastY, -2, 0.002);
      if (backdropARef.current) {
        // Append small offset
        backdropARef.current.style.transform += ` translateY(${lastY}px)`;
      }
      animationId = requestAnimationFrame(idleLoop);
    };

    animationId = requestAnimationFrame(idleLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="hero">
      <div className="backdrop backdrop-a" ref={backdropARef}></div>
      <div className="backdrop backdrop-b" ref={backdropBRef}></div>

      <div className="hero-copy reveal">
        <div className="eyebrow">
          <span className="eyebrow-dot"></span>
          New venture. Built for speed, scale, and standout products.
        </div>
        <h1>Modern software for teams that want to move with precision.</h1>
        <p className="hero-text">
          Verplexo designs and ships high-performance web experiences, internal tools,
          and scalable product systems for startups, growing businesses, and digital
          creators who need more than a template.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Book a strategy call</a>
          <a className="button button-secondary" href="#work">See selected work</a>
        </div>
        <div className="hero-metrics">
          <div>
            <strong>48h</strong>
            <span>to first prototype</span>
          </div>
          <div>
            <strong>99.9%</strong>
            <span>delivery reliability</span>
          </div>
          <div>
            <strong>3x</strong>
            <span>faster launch cycles</span>
          </div>
        </div>
      </div>

      <div className="hero-visual reveal">
        <div className="visual-shell" ref={visualShellRef}>
          <div className="visual-topline">
            <span className="status-pill"><span></span>Live build system</span>
            <span className="timeline">Sprint 03 / Design to ship</span>
          </div>

          <div className="dashboard-card dashboard-primary">
            <div className="dashboard-label">Platform velocity</div>
            <div className="dashboard-value">2.8x</div>
            <div className="dashboard-copy">Increase in feature delivery after modernizing the stack.</div>
            <div className="sparkline">
              <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="mini-card">
              <span className="mini-title">Architecture</span>
              <strong>Composable</strong>
              <p>Clear systems that scale without slowing the team down.</p>
            </div>
            <div className="mini-card">
              <span className="mini-title">Design</span>
              <strong>Distinctive</strong>
              <p>Interfaces with a premium feel and sharp product focus.</p>
            </div>
            <div className="mini-card wide">
              <span className="mini-title">Launch state</span>
              <div className="launch-row">
                <div>
                  <strong>Ready</strong>
                  <p>Performance, SEO, and responsive polish included.</p>
                </div>
                <div className="orbit"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// verplexo-optim-iter-1

// verplexo-optim-iter-13

// verplexo-optim-iter-25
