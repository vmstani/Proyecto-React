import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styleEstatico.css';
import Cart from '../Cart';
import logo from '../../assets/logo.png';
import { useCart } from '../../context/CartContext'; 

const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { cart, handleDeleteFromCart } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

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
          <li><Link to="/" className="link" onClick={toggleMenu}>Inicio</Link></li>
          <li><Link to="/productos" className="link" onClick={toggleMenu}>Productos</Link></li>
          <li><Link to="/nosotros" className="link" onClick={toggleMenu}>Nosotros</Link></li>
          <li><Link to="/contacto" className="link" onClick={toggleMenu}>Contacto</Link></li>
          <li className="btnLogin">
            <Link to="/login" className="link" onClick={toggleMenu}>
              <i className="fa-solid fa-right-to-bracket"></i>
            </Link>
          </li>
          <li className="btnAdmin">
            <Link to="/admin" className="link" onClick={toggleMenu}>
              <i className="fa-solid fa-user-tie"></i>
            </Link>
          </li>
          <li className="cartnav">
            <button className="btnCart" onClick={() => setCartOpen(true)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <Cart
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

