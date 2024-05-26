import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
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
        <p>&copy; 2024 yuvraj. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
