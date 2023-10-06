import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links-container">
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <p className="footer-desc">Copyright &#169; {new Date().getFullYear()} Yuvraj. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
