import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Specs } from './components/Specs';
import { CaseStudy } from './components/CaseStudy';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { SuccessModal } from './components/SuccessModal';
import { Footer } from './components/Footer';

function App() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    // Scroll reveal observer
    const revealItems = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="noise"></div>
      <Header />
      <main id="home">
        <Hero />
        <TrustBar />
        <Services />
        <Specs />
        <CaseStudy />
        <Process />
        <Testimonials />
        <ContactForm onSubmitSuccess={() => setShowSuccessModal(true)} />
      </main>
      <Footer />

      {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )}
    </>
  );
}

export default App;

// verplexo-optim-iter-11
