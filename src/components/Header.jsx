import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="header"
      data-aos="fade-down"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="1000"
    >
      <div className="logo">
        <a href="/">YSB</a>
      </div>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar-list">
          <li>
            <a className="navbar-link" href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#project" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="mobile-nav" onClick={toggleMenu}>
        {isMenuOpen ? <IoMdClose size={28} /> : <IoMenu size={28} />}
      </div>
    </header>
  );
};

export default Header;
