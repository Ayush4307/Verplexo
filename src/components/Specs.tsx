import { useState, useEffect } from 'react';

type TabType = 'performance' | 'engineering' | 'business';

interface SpecRow {
  title: string;
  desc: string;
  verplexoVal: string;
  verplexoWidth: string; // e.g. "100%"
  standardVal: string;
  standardWidth: string;
}

const specsData: Record<TabType, SpecRow[]> = {
  performance: [
    {
      title: 'Lighthouse Speed Score',
      desc: 'Real-world page loading optimization and speed index.',
      verplexoVal: '100 / 100',
      verplexoWidth: '100%',
      standardVal: '68 / 100',
      standardWidth: '68%',
    },
    {
      title: 'Time to Interactive (TTI)',
      desc: 'Time before the page becomes fully responsive to user input.',
      verplexoVal: '0.2s',
      verplexoWidth: '98%',
      standardVal: '2.8s',
      standardWidth: '25%',
    },
  ],
  engineering: [
    {
      title: 'Code Bloat & Bundle Size',
      desc: 'Optimized package size without unnecessary scripts and libraries.',
      verplexoVal: 'Blazing Light (<12KB)',
      verplexoWidth: '95%',
      standardVal: 'Heavy Bloat (>350KB)',
      standardWidth: '20%',
    },
    {
      title: 'SEO & Indexability',
      desc: 'Semantic HTML5 structure and clean server-ready index metadata.',
      verplexoVal: 'S-Tier (100%)',
      verplexoWidth: '100%',
      standardVal: 'C-Tier (65%)',
      standardWidth: '65%',
    },
  ],
  business: [
    {
      title: 'Development Lead Time',
      desc: 'Sprint cadence to ship the first fully-functional web model.',
      verplexoVal: '48 Hours',
      verplexoWidth: '95%',
      standardVal: '2 - 3 Weeks',
      standardWidth: '30%',
    },
    {
      title: 'Hosting & Server Overheads',
      desc: 'Leveraging optimized edge routing and lightweight static deployment cost.',
      verplexoVal: '$0 / mo (Serverless)',
      verplexoWidth: '100%',
      standardVal: '$45+/mo (Traditional)',
      standardWidth: '15%',
    },
  ],
};

export const Specs = () => {
  const [activeTab, setActiveTab] = useState<TabType>('performance');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="section specs-section">
      <div className="section-heading reveal">
        <span className="section-kicker">Never Settle Specification</span>
        <h2>The Spec Sheet that dominates the industry benchmark.</h2>
        <p>
          Compare our engineering standards side-by-side with typical agency templates and bloated frameworks.
        </p>
      </div>

      <div className="specs-interactive-container reveal">
        <div className="specs-tabs">
          <button
            className={`spec-tab ${activeTab === 'performance' ? 'active' : ''}`}
            onClick={() => setActiveTab('performance')}
          >
            Performance Specs
          </button>
          <button
            className={`spec-tab ${activeTab === 'engineering' ? 'active' : ''}`}
            onClick={() => setActiveTab('engineering')}
          >
            Engineering Build
          </button>
          <button
            className={`spec-tab ${activeTab === 'business' ? 'active' : ''}`}
            onClick={() => setActiveTab('business')}
          >
            Business Value
          </button>
        </div>

        <div className="specs-grid-display">
          <div className="specs-flagship-card">
            <span className="specs-flagship-label">Flagship Engine</span>
            <h3>Verplexo Core OS</h3>
            <p>Tailored architecture designed for peak speed, flawless search ranking, and modular expansion.</p>
            <div className="specs-logo">V</div>
          </div>

          <div className="specs-comparison-list">
            <div className="tab-pane">
              {specsData[activeTab].map((spec, idx) => (
                <div className="spec-comparison-row" key={idx}>
                  <div className="spec-info">
                    <h4>{spec.title}</h4>
                    <p>{spec.desc}</p>
                  </div>
                  <div className="spec-values">
                    <div className="spec-val-verplexo">
                      <span className="label-v">Verplexo</span>
                      <strong>{spec.verplexoVal}</strong>
                      <div className="bar-outer">
                        <div
                          className="bar-inner verplexo-green"
                          style={{ width: animate ? spec.verplexoWidth : '0%' }}
                        ></div>
                      </div>
                    </div>
                    <div className="spec-val-standard">
                      <span className="label-s">Standard Build</span>
                      <strong>{spec.standardVal}</strong>
                      <div className="bar-outer">
                        <div
                          className="bar-inner standard-gray"
                          style={{ width: animate ? spec.standardWidth : '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// verplexo-optim-iter-4
