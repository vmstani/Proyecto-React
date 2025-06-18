import React from 'react';
import './styleStatic.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; Todos los derechos reservados</p>
      <div className="social-icons">
        <a href="https://www.facebook.com/vero.trainer" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://x.com/VeroStanis" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/verotrainer" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
