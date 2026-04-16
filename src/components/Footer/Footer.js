import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} DOMPRETO. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#privacy">Privacidade</a>
          <a href="#terms">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;