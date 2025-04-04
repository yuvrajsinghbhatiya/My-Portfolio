import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/yvrjbhatiya/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yuvrajsinghbhatiya" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <p>&copy; {currentYear} yuvraj. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

