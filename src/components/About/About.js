import React from 'react';
import './About.css';


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-image">
          {/* Imagem placeholder. Substitua pelo caminho real da imagem */}
          <img 
            src="/Dompreto.png" 
            alt="Equipe trabalhando" 
          />
        </div>
        <div className="about-content">
          <h2>Sobre</h2>
          <h2>Dom Preto</h2>
          <p>    
Dom Preto (Fábio Valadares) é um músico e compositor independente de Belo
Horizonte/MG, nascido em 22 de novembro de 1987. Com uma voz imponente e um
timbre único que carrega a essência mineira, ele se destaca no cenário musical
alternativo, mesclando Blues, R&B, Rock, MPB, Rap e Pop em suas apresentações, que
incluem músicas autorais e releituras de clássicos. Desde a infância, influenciado pelo
pai músico, começou a tocar violão e iniciou suas composições em 2002, acumulando
mais de 200 canções autorais. Aperfeiçoou sua técnica vocal na Babaya Casa de
Canto (2012) e na Bituca – Universidade de Música Popular (2013), onde estudou com
mestres como Babaya, Ian Guest e Gilvan de Oliveira. Atuou como guitarrista nas
bandas Morphina (2004), Soul 4 (2007), Abou e os Caras da Terra (2008) e Jangada
de Pedra (2008). Em 2010, fundou a banda Flores Marcianas, assumindo os vocais e a
guitarra. Desde 2008, sob o nome artístico Dom Preto, se apresenta solo e com sua
banda, formada por Egberto Brant (baixo), Gustavo Grieco (bateria), Arildo Nani
(percussão) e Walner Lucas (teclados). Inspirado por Tim Maia, Jorge Ben, Marku Ribas,
Led Zeppelin e James Brown, Dom Preto traduz a alma das montanhas mineiras em sua
sonoridade autêntica, conectando diferentes estilos com sua voz marcante e carisma
singular.
          </p>
          <p>
            Nossa missão é entregar valor real aos clientes, unindo estética impecável com código robusto e escalável.
          </p>
          <a href="#festivals" className="btn btn-secondary">Saiba Mais</a>
        </div>
      </div>
    </section>

    
    
  );
};

export default About;