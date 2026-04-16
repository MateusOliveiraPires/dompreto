import React from 'react';
import './Features.css';

// Dados estáticos para os cards
const featuresData = [
  
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        
        <div className="features-grid">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;