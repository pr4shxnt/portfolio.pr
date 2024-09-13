import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <i className="fa-solid fa-user"></i> {/* Example icon */}
        <a href="#">PRASHANT</a>
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#MoreAboutMe">More</a></li>
            <li><a href="#Socials-container">Socials</a></li>
          </ul>
        </div>
        <a href="#cv-content" className="log-in">Resume</a>
        <div className="menu-btn" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sidebar">
          <div className="sidebar-content">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#aboutme">About Me</a></li>
              <li><a href="#MoreAboutMe">More</a></li>
              <li><a href="#Socials-container">Socials</a></li>
            </ul>
            <label className="close-sidebar-button" onClick={toggleMenu}>X</label>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
