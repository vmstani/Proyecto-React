import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styleEstatico.css';
import Cart from '../Cart';

const Header = ({ cartItems, borrarProducto }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isMenuOpen ? 'menu-open' : ''}>
      <nav>
        <Link to="/" className="logo">
          Tu Logo
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
            <Link to="/acercade" className="link" onClick={() => setMenuOpen(false)}>
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link to="/productos" className="link" onClick={() => setMenuOpen(false)}>
              Galeria de productos
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="link" onClick={() => setMenuOpen(false)}>
              Contacto
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
