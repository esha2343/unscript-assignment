import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import '../components/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="logo">
        <img src="https://cdn.prod.website-files.com/6643532c58c89f83c4fcd358/66435cbb1e8a3fb4dd89a6b1_unscript%20Logo.webp" alt="Logo" />
      </div>

      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <div className="dropdown">
          <a href="#">Use Cases</a>
          <div className="dropdown-content">
            <a href="#">Use Case 1</a>
            <a href="#">Use Case 2</a>
            <a href="#">Use Case 3</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#">Features</a>
          <div className="dropdown-content">
            <a href="#">Feature 1</a>
            <a href="#">Feature 2</a>
            <a href="#">Feature 3</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#">Resources</a>
          <div className="dropdown-content">
            <a href="#">Feature 1</a>
            <a href="#">Feature 2</a>
            <a href="#">Feature 3</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#">Company</a>
          <div className="dropdown-content">
            <a href="#">Feature 1</a>
            <a href="#">Feature 2</a>
            <a href="#">Feature 3</a>
          </div>
        </div>
      </nav>

      <button className="contact-button">CONTACT SALES</button>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>
    </header>
  );
};

export default Header;
