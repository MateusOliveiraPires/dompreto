import React from 'react';
import './Clipping.css';


const Clipping = () => {
  const galeria = [
    {
      imagem: '/festivalvegmineiro.png',
      link: 'https://soubh.uai.com.br/noticias/variedades/festival-paraiso-veg-reune-gastronomia-e-moda-vegana-no-museu-mineiro/',
      titulo: 'Clipping 1'
    },
    {
      imagem: '/festivaljazzeblues.png',
      link: 'https://bhaz.com.br/guia-bhaz/guia-virada-cultural-bh/',
      titulo: 'Clipping 2'
    },
    {
      imagem: '/festivaljazzeblues.png',
      link: 'https://instagram.com',
      titulo: 'Clipping 3'
    },
    {
      imagem: '/festivaldrafmood.png',
      link: 'https://instagram.com',
      titulo: 'Clipping 4'
    }
  ];

  
  return (
    <section id="clipping" className="clipping-section">
      <div className="container clipping-grid">
        <div className="galeria-grid">
          {galeria.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="galeria-item"
            >
              <img src={item.imagem} alt={item.titulo} />
              <span>{item.titulo}</span>
            </a>
          ))}
        </div>
        <div className="clipping-content">
          <h2>CLIPPING</h2>
          <h2>Clipping do artista lançados nos últimos anos</h2>
          <p>    

          </p>
          <p>
            
          </p>
          <a href="#appearances" className="btn btn-secondary">Saiba Mais</a>
        </div>
      </div>
    </section>

    
    
  );
};

export default Clipping;