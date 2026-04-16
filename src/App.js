import React from 'react';
import './App.css';

// Importação dos componentes
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Festivals from './components/Festivals/Festivals';
import Clipping from './components/Clipping/Clipping';
import Appearances from './components/Appearances/Appearances';
import Authors from './components/Authors/Authors';
import Features from './components/Features/Features';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <Hero />
        <About />
        <Festivals />
        <Clipping />
        <Appearances/>
        <Authors />
        <Features />       
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

