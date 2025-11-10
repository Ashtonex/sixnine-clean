// src/App.jsx
import React from 'react';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Highlights from './components/Highlights';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="highlights"><Highlights /></section>
      <section id="why"><WhyChooseUs /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <Footer />

    </>
  );
}

export default App;