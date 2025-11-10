// src/components/WhyChooseUs.jsx
import React, { useEffect } from 'react';
import bgImage from '../assets/why-choose-us-bg.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="why"
      className="why-choose-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="why-overlay">
        <h2 data-aos="fade-up">THE REASONS WHY YOU SHOULD CHOOSE OUR COMPANY</h2>
        <ul className="reasons-list">
          <li data-aos="fade-up" data-aos-delay="100">
            <span role="img" aria-label="Professional Team">👷‍♂️</span>
            <strong>Professional Team</strong> – Skilled experts committed to excellence on every project.
          </li>
          <li data-aos="fade-up" data-aos-delay="200">
            <span role="img" aria-label="Certified Experience">📜</span>
            <strong>Certified Experience</strong> – Proven track record with industry certifications and client trust.
          </li>
          <li data-aos="fade-up" data-aos-delay="300">
            <span role="img" aria-label="Advanced Tools">🛠️</span>
            <strong>Advanced Tools</strong> – Modern equipment and technology for efficient, high-quality builds.
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            <span role="img" aria-label="Affordable Price">💰</span>
            <strong>Affordable Price</strong> – Competitive rates without compromising on quality or safety.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WhyChooseUs;