import React from 'react';
import './Features.css';

// Dados estáticos para os cards
const featuresData = [
  {
    id: 1,
    icon: '🚀',
    title: 'Performance',
    description: 'Código otimizado para carregamento instantâneo e melhor ranqueamento SEO.'
  },
  {
    id: 2,
    icon: '📱',
    title: 'Responsivo',
    description: 'Layouts que se adaptam perfeitamente a qualquer dispositivo móvel ou desktop.'
  },
  {
    id: 3,
    icon: '🔒',
    title: 'Segurança',
    description: 'Práticas modernas de segurança para proteger dados e garantir tranquilidade.'
  },
  {
    id: 4,
    icon: '🎨',
    title: 'UI Moderna',
    description: 'Design limpo e intuitivo focado na melhor experiência do usuário.'
  }
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title">Nossos Diferenciais</h2>
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