import React, { useEffect, useState } from 'react';
import './Header.css';

const menuItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Festivais', href: '#festivals' },
  { label: 'Mídia', href: '#appearances' },
  { label: 'Autorais', href: '#authors' },
  { label: 'Contato', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <a href="#hero" onClick={closeMenu}>
            DOMPRETO
          </a>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          type="button"
        >
          <span className="hamburger"></span>
        </button>

        <nav
          id="main-navigation"
          className={`nav ${isMenuOpen ? 'active' : ''}`}
        >
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  );
};

export default Header;