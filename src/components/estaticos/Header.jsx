import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styleEstatico.css';
import Cart from '../Cart';
import logo from '../../assets/logo.png';

const Header = ({ cartItems, borrarProducto }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Cierra el menú si se cambia a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={isMenuOpen ? 'menu-open' : ''}>
      <nav>
        <Link to="/" className="logo">
          <img src={logo} alt="Logo de la empresa" />
        </Link>

        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className="link" onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/productos" className="link" onClick={() => setMenuOpen(false)}>
              Productos
            </Link>
          </li>
          <li>
            <Link to="/acercade" className="link" onClick={() => setMenuOpen(false)}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="link" onClick={() => setMenuOpen(false)}>
              Contacto
            </Link>
          </li>
          <li className="btnLogin">
            <Link to="/login" className="link" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-right-to-bracket"></i>
            </Link>
          </li>
          <li className="btnAdmin">
            <Link to="/admin" className="link" onClick={() => setMenuOpen(false)}>
              <i className="fa-solid fa-user-tie"></i>
            </Link>
          </li>
          <li className="cartnav">
            <button className="btnCart" onClick={() => setCartOpen(true)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <Cart
              borrarProducto={borrarProducto}
              cartItems={cartItems}
              isOpen={isCartOpen}
              onClose={() => setCartOpen(false)}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
