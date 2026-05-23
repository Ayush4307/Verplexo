const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const revealItems = document.querySelectorAll('.reveal');
const statNodes = document.querySelectorAll('[data-count]');

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
