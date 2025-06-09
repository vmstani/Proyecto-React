import React from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import bannerImage from '../assets/gym.jpg';
import './styleHome.css';
import { useCart } from '../context/CartContext';

const Home = () => {
  const {
    cart,
    productos,
    cargando,
    handleAddToCart,
    handleDeleteFromCart
  } = useCart();

  return (
    <>
      <Header borrarProducto={handleDeleteFromCart} cartItems={cart} />

      <section className="hero-banner">
        <Image 
          src={bannerImage} 
          alt="Bienvenidos a nuestra tienda de cócteles" 
          fluid
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">¡Bienvenido/a a tu punto de partida hacia una vida saludable!</h1>
          <p className="hero-subtitle">Transformá tu Cuerpo. Fortalecé tu Vida.</p>
        </div>
      </section>

      <main className="main-content">
        <Container>
          <div className="welcome-section">
            <h2 className="section-title"> Empezá Hoy. Sentite Fuerte Siempre.</h2>

            <div className="text-grid">
              <div className="text-block">
                <p className="lead-text">
                  Creemos que el fitness es mucho más que ejercicio; es una herramienta para transformar tu vida...
                </p>
              </div>

              <div className="text-block">
                <p>
                  Sabemos que el camino hacia una vida activa puede parecer abrumador...
                </p>
                <div className="highlight-box">
                  <p>¡Tu próxima transformación comienza aquí!</p>
                </div>
              </div>

              <div className="text-block">
                <h3 className="callout-title">¿Listo/a para dar el primer paso hacia la mejor versión de ti?</h3>
                <p className="callout-text">
                  ¡Llegaste al lugar indicado! Te ofrecemos planes para todos los niveles.
                </p>
                <p>
                  Explorá nuestra galería de productos, conocé nuestra historia y contactanos para más info.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default Home;

