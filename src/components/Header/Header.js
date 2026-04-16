import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para fixar o header ao rolar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <a href="#hero">DOMPRETO</a>
        </div>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
            <li><a href="#festivals" onClick={() => setIsMenuOpen(false)}>Festivais</a></li>
            <li><a href="#clipping" onClick={() => setIsMenuOpen(false)}>Clipping</a></li>
            <li><a href="#appearances" onClick={() => setIsMenuOpen(false)}>Mídia</a></li>
            <li><a href="#authors" onClick={() => setIsMenuOpen(false)}>Autorais</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;