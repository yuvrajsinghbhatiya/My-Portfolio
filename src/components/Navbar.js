import React, { useState } from 'react';
import OpenIMG from "../img/open.png";
import CloseIMG from "../img/close.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('open')
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav id="desktop-nav">
        <div className="logo">Yuvraj</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Yuvraj</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <img src={isMenuOpen ?  OpenIMG : CloseIMG} alt="Menu Icon" />
          </div>
          {isMenuOpen && (
            <div className="menu-links">
              <ul>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
