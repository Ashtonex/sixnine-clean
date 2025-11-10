// src/components/Highlights.jsx
import React from 'react';

function Highlights() {
  return (
    <section id="highlights" className="highlights-section">
      <h2>Company Highlights</h2>
      <div className="highlights-grid">
        <div className="highlight-card">
          <h3>25+</h3>
          <p>Years of Undefeated Success</p>
        </div>
        <div className="highlight-card">
          <h3>1120+</h3>
          <p>Completed Projects</p>
        </div>
        <div className="highlight-card">
          <h3>1520+</h3>
          <p>Specialized Employees</p>
        </div>
      </div>
    </section>
  );
}

export default Highlights;