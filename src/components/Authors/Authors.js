import React from 'react';
import './Authors.css';


const Authors = () => {

  const galeria = [
    {
      imagem: '/xotecacheado.png',
      link: 'https://open.spotify.com/intl-pt/track/2qynyPHHm8uS6SbvjeYNdG?si=ITUM2Jk7QDihnb7u5voDag&context=spotify%3Aalbum%3A2L0l2psPHrC817OuYBxpnn&nd=1&dlsi=40cdf311069b45e1',
      titulo: 'Xote Cacheado'
    },
    {
      imagem: '/meninapequena.png',
      link: 'https://open.spotify.com/intl-pt/track/5aiiUsCR8I9zdYFYKZg6wZ?si=bWk_DjdfQXOqJIrtHuW78w&nd=1&dlsi=e48174f638fd4be3',
      titulo: 'Menina Pequena'
    },
    {
      imagem: '/janeladomundo.png',
      link: 'https://www.youtube.com/watch?v=Ca2Y6PgYnL0&ab_channel=DomPreto',
      titulo: 'Janela do Mundo'
    },
    {
      imagem: '/viradacultural.png',
      link: 'https://www.youtube.com/watch?v=AaIL9lShS94&list=RDAaIL9lShS94&start_radio=1',
      titulo: 'Dom Preto Acústico- Tim Maia pout pourri'
    } 
  ];
  return (
    <section id="authors" className="authors-section">
      <div className="container authors-grid">
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
        <div className="authors-content">
          <h2>AUTORAIS</h2>
          
          
          <p>    
              As músicas "Menina Pequena" e "Xote Cacheado" de Dom Preto estão disponíveis em
              todas as plataformas digitais. Ambas mostram a diversidade musical do artista, com a
              delicadeza de "Menina Pequena" e a energia dançante de "Xote Cacheado", refletindo
              sua identidade única e conquistando ouvintes em todo o Brasil.
          </p>
          <a href="#contact" className="btn btn-secondary">Saiba Mais</a>
        </div>
        
      </div>
    </section>

    
    
  );
};

export default Authors;