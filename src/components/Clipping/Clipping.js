import React from 'react';
import './Clipping.css';


const Clipping = () => {
  const galeria = [
    {
      imagem: '/festivalvegmineiro.png',
      link: 'https://soubh.uai.com.br/noticias/variedades/festival-paraiso-veg-reune-gastronomia-e-moda-vegana-no-museu-mineiro/',
      titulo: 'Festival Paraiso Veg'
    },
    {
      imagem: '/viradaculturalbhclipping.png',
      link: 'https://bhaz.com.br/guia-bhaz/guia-virada-cultural-bh/',
      titulo: 'Virada Cultural'
    },
    {
      imagem: '/festivaljazzeblues.png',
      link: '',
      titulo: 'Festival de Jazz & Blues'
    },
    {
      imagem: 'festivalbluesnafloresta123.png',
      link: '',
      titulo: 'Festival Blues na Floresta'
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