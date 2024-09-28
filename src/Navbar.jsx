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
            <li className='dropdown-parent'><a href="">Projects</a>
            <ul className='dropdown-menu'>
              <li><a href="">Portfolio</a></li>
              <li><a href="https://pr4shxnt.github.io/BurgerHouse-Project/" target='_blank'>Burger House</a></li>
              <li><a href="https://pr4shxnt.github.io/UDAEH" target='_blank'>Consultancy Web</a></li>


            </ul>
            
            
            </li>
            
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
