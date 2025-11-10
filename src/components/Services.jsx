// src/components/Services.jsx
import React from 'react';

function Services() {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>

      <div className="services-grid">
        <div className="service-card">
          <span role="img" aria-label="Builder Engineering">🏗️</span>
          <h3>Builder Engineering</h3>
        </div>
        <div className="service-card">
          <span role="img" aria-label="Architecture">🏛️</span>
          <h3>Architecture</h3>
        </div>
        <div className="service-card">
          <span role="img" aria-label="Building Renovation">🔧</span>
          <h3>Building Renovation</h3>
        </div>
        <div className="service-card">
          <span role="img" aria-label="Consulting">📋</span>
          <h3>Consulting</h3>
        </div>
      </div>

      <div className="secondary-services">
        <h4>We also specialize in:</h4>
        <ul>
          <li>🏛️ Architecture</li>
          <li>🏗️ Construction</li>
          <li>🛋️ Interior Design</li>
          <li>🚚 Concrete Transport</li>
        </ul>
      </div>
    </section>
  );
}

export default Services;