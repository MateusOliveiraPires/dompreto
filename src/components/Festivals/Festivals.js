import React from 'react';
import './Festivals.css';


const Festivals = () => {
    const galeria = [
    {
      imagem: '/viradacultural.png',
      link: 'https://google.com',
      titulo: 'Festival 1'
    },
    {
      imagem: '/festivaltiradentes.png',
      link: 'https://youtube.com',
      titulo: 'Festival 2'
    },
    {
      imagem: '/festivalveggieroots.png',
      link: 'https://instagram.com',
      titulo: 'Festival 3'
    },
    {
      imagem: '/festivaldrafmood.png',
      link: 'https://instagram.com',
      titulo: 'Festival 4'
    }
  ];
  return (
    <section id="festivals" className="festivals-section">
      <div className="container festivals-grid">
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
        <div className="festivals-content">
          <h2>FESTIVAIS</h2>
          <h2>Projetos do artista lançados nos últimos anos</h2>
          <p>    
A trajetória de Dom Preto inclui apresentações em grandes festivais, como o Festival
de Inverno de Ouro Preto e Mariana e o Savassi Festival, onde levou sua fusão de
ritmos ao público. Destacou-se no Palco Ultra e foi premiado no Festival BH Stone (2º
lugar) e na Virada Cultural de BH como revelação. Sua presença também brilhou em
eventos como Boa Vista Soul Jazz, Dipanas Blues, Chapadas Blues, Horizonte Blues e
na final do Tiradentes Jazz Blues Festival, sempre com sua voz marcante e
performance envolvente.
          </p>
          <p>
            Nossa missão é entregar valor real aos clientes, unindo estética impecável com código robusto e escalável.
          </p>
          <a href="#clipping" className="btn btn-secondary">Saiba Mais</a>
        </div>
      </div>
    </section>

    
    
  );
};

export default Festivals;