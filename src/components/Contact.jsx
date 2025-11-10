// src/components/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" name="name" required />
        <input type="email" placeholder="Your Email" name="email" required />
        <textarea placeholder="Your Message" name="message" rows="5" required></textarea>
        <button type="gradient-button">Request a Quote</button>
      </form>

      <div className="contact-actions">
        <a
          href="https://wa.me/+48728599401"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          📞 WhatsApp Us
        </a>
      </div>

      <div className="map-placeholder">
        {/* Optional: Embed Google Map iframe here */}
        <p>[Map Placeholder]</p>
      </div>
    </section>
  );
}

export default Contact;