import React from 'react';
import './Hero.css';


const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>DOMPRETO</h1>
        <p>Transformamos sua experiência musical em algo inesquecível</p>
        <a href="#about" className="btn btn-primary">Começar Agora</a>
      </div>
    </section>
  );
};

export default Hero;