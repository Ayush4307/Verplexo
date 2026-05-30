const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const revealItems = document.querySelectorAll('.reveal');
const statNodes = document.querySelectorAll('[data-count]');

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

menuToggle?.addEventListener('click', () => {
  const isOpen = header?.getAttribute('data-open') === 'true';
  header?.setAttribute('data-open', String(!isOpen));
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
});

for (const link of document.querySelectorAll('.nav-links a, .nav-cta, .cta-actions a')) {
  link.addEventListener('click', () => {
    header?.setAttribute('data-open', 'false');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
}

const revealObserver = new IntersectionObserver(
  entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.18 }
);

revealItems.forEach(item => revealObserver.observe(item));

const countUp = element => {
  const target = Number(element.dataset.count || 0);
  const duration = 1400;
  const start = performance.now();

  const tick = now => {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * target);
    element.textContent = String(value);

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      element.textContent = String(target);
    }
  };

  requestAnimationFrame(tick);
};

const statsObserver = new IntersectionObserver(
  entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        countUp(entry.target);
        statsObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.5 }
);

statNodes.forEach(node => statsObserver.observe(node));

// Lightweight parallax for backdrops and a tiny tilt for the visual shell
if (!prefersReduced) {
  const backdropA = document.querySelector('.backdrop-a');
  const backdropB = document.querySelector('.backdrop-b');
  const visualShell = document.querySelector('.visual-shell');

  window.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 .. 1
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    if (backdropA) backdropA.style.transform = `translate(${x * 8}px, ${y * 6}px)`;
    if (backdropB) backdropB.style.transform = `translate(${x * -10}px, ${y * -6}px)`;
    if (visualShell) visualShell.style.transform = `rotateX(${y * 2}deg) rotateY(${x * 3}deg)`;
  }, { passive: true });

  // subtle idle parallax using requestAnimationFrame
  let lastX = 0, lastY = 0;
  const lerp = (a, b, t) => a + (b - a) * t;
  function idleLoop() {
    lastX = lerp(lastX, 0, 0.02);
    lastY = lerp(lastY, -2, 0.002);
    if (backdropA) backdropA.style.transform += ` translateY(${lastY}px)`;
    requestAnimationFrame(idleLoop);
  }
  requestAnimationFrame(idleLoop);
}

// ==========================================================================
// OnePlus-Inspired Horizontal Slider & Specs Sheet Logic
// ==========================================================================

// 1. Horizontal Slider Dragging & Navigation Button Logic
const slider = document.getElementById('services-slider');
const prevBtn = document.getElementById('slide-prev');
const nextBtn = document.getElementById('slide-next');

if (slider) {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed multiplier
    slider.scrollLeft = scrollLeft - walk;
  });

  // Slide buttons
  prevBtn?.addEventListener('click', () => {
    const cardWidth = slider.querySelector('.flagship-card')?.offsetWidth || 390;
    slider.scrollBy({ left: -cardWidth - 24, behavior: 'smooth' });
  });

  nextBtn?.addEventListener('click', () => {
    const cardWidth = slider.querySelector('.flagship-card')?.offsetWidth || 390;
    slider.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
  });
}

// 2. Interactive Spec Sheet Tab Switching
const tabButtons = document.querySelectorAll('.spec-tab');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.dataset.tab;

    // Toggle button active state
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Show corresponding pane
    tabPanes.forEach(pane => {
      if (pane.id === `pane-${targetTab}`) {
        pane.style.display = 'flex';
        // Reset bar-inner animations to let them expand beautifully on display
        const progressBars = pane.querySelectorAll('.bar-inner');
        progressBars.forEach(bar => {
          const targetWidth = bar.style.width;
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = targetWidth;
          }, 50);
        });
      } else {
        pane.style.display = 'none';
      }
    });
  });
});

// Trigger initial bar expansion animation on load for the active pane
document.addEventListener('DOMContentLoaded', () => {
  const activeBars = document.querySelectorAll('.tab-pane.active .bar-inner');
  activeBars.forEach(bar => {
    const targetWidth = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 150);
  });
});


