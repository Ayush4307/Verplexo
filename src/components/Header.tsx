import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header" data-open={isOpen ? 'true' : 'false'}>
      <a className="brand" href="#home" aria-label="Verplexo home" onClick={closeMenu}>
        <span className="brand-mark">V</span>
        <span className="brand-text">Verplexo</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-nav"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
        <span className="sr-only">Toggle navigation</span>
      </button>

      <nav id="primary-nav" className="nav-links">
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#process" onClick={closeMenu}>Process</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <a className="nav-cta" href="#contact" onClick={closeMenu}>
        Start a project
      </a>
    </header>
  );
};
