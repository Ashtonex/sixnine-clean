// src/components/Navbar.jsx
import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="logo">
          <img src={logo} alt="Six Nine Construction logo" className="navbar-logo" />
          <span className="logo-text">Six Nine Construction</span>
        </a>

        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
          <button className="gradient-button">Get a Quote</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;