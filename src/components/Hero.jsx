import React from 'react';
import heroImage from '../assets/hero-image.jpg'; // Make sure this file exists and is committed

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <img
        className="hero-image"
        src={heroImage}
        alt="Construction site background"
      />
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>BUILD YOUR DREAM</h1>
          <p>We offer professional services for construction and renovation.</p>
          <button className="gradient-button">Get Your Free Estimate</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;