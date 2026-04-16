import React from 'react';
import './Festivals.css';


const Festivals = () => {
    const galeria = [
    {
      imagem: '/viradacultural.png',
      link: 'https://culturalizabh.com.br/index.php/2018/05/16/festival-blues-na-floresta/',
      titulo: 'Festival Blues na Floresta Amadoria'
    },
    {
      imagem: '/festivaltiradentes.png',
      link: 'https://bhaz.com.br/guia-bhaz/festival-jazz-blues-%20gratuito/',
      titulo: 'Buena Vista soul,jazz e blues festival'
    },
    {
      imagem: '/festivalveggieroots.png',
      link: 'https://g1.globo.com/mg/minas-gerais/o-que-fazer-%20em-belo-horizonte/noticia/2019/07/10/virada-%20cultural-de-bh-veja-programacao-completa.ghtml%20https:/bhaz.com.br/guia-bhaz/guia-virada-cultural-%20bh/',
      titulo: 'Virada Cultural 2019(Palco Acaiaca)'
    },
    {
      imagem: '/festivaldrafmood.png',
      link: '',
      titulo: 'Festival Draft Mood FM'
    },
    {
      imagem: '/festivalveggieroots.png',
      link: 'https://soubh.uai.com.br/noticias/variedades/festival-paraiso-veg-reune-gastronomia-e-moda-vegana-no-museu-mineiro/',
      titulo: 'Festival vegano Paraiso Veggie'
    },
    {
      imagem: '/festivaltiradentes.png',
      link: 'https://www.youtube.com/live/iqd5oP0w064?si=dfqoq73xRzSCL8AJ',
      titulo: 'Festival de Novos Talentos Blues e Jazz Tiradentes'
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
          <a href="#clipping" className="btn btn-secondary">Saiba Mais</a>
        </div>
      </div>
    </section>

    
    
  );
};

export default Festivals;