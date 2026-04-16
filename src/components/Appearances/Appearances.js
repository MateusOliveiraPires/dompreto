import React from 'react';
import './Appearances.css';


const Appearances = () => {

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
    <section id="appearances" className="appearances-section">
      <div className="container appearances-grid">
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
        <div className="appearances-content">
          <h2>APARIÇÕES EM MIDIA</h2>
          <h3>Dom Preto já teve várias aparições na média também confira</h3>
          
          <p>    
              Dom Preto já marcou presença na mídia mineira, com aparições no Caleidoscópio
              (TV Horizonte) e no Sons de Minas (TV e rádio), onde apresentou seu trabalho
              autoral. Também foi destaque na Rádio Extra e Rádio Inconfidência, consolidando
              sua trajetória no cenário musical alternativo.
          </p>
          <p>
            Nossa missão é entregar valor real aos clientes, unindo estética impecável com código robusto e escalável.
          </p>
          <a href="#authors" className="btn btn-secondary">Saiba Mais</a>
        </div>
      </div>
    </section>

    
    
  );
};

export default Appearances;