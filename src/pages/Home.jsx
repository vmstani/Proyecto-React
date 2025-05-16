import React from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import bannerImage from '../assets/tragos.jpg';
import './styleHome.css'; // Nuevo archivo de estilos

const Home = ({ cart, productos, cargando, agregarCarrito, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart}/>
      
      {/* Hero Banner */}
      <section className="hero-banner">
        <Image 
          src={bannerImage} 
          alt="Bienvenidos a nuestra tienda de cócteles" 
          fluid
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Bienvenidos a Che, Trago Va</h1>
          <p className="hero-subtitle">Donde cada trago cuenta una historia</p>
        </div>
      </section>
      
      <main className="main-content">
        <Container>
          <div className="welcome-section">
            <h2 className="section-title">Descubre Nuestra Mixología</h2>
            
            <div className="text-grid">
              <div className="text-block">
                <p className="lead-text">
                  Encontrá la coctelería de autor y los clásicos que amás, elaborados con ingredientes premium y la pasión de expertos bartenders.
                </p>
              </div>
              
              <div className="text-block">
                <p>
                  Te ofrecemos una amplia variedad de tragos listos para servir, desde refrescantes aperitivos hasta sofisticados digestivos. Descubrí nuevas combinaciones y disfrutá de la calidad de un bar de primer nivel en la puerta de tu casa.
                </p>
                <div className="highlight-box">
                  <p>¡Tu próxima celebración comienza aquí!</p>
                </div>
              </div>
              
              <div className="text-block">
                <h3 className="callout-title">¿Antojo de un trago delicioso?</h3>
                <p className="callout-text">
                  ¡Llegaste al lugar indicado! Te ofrecemos una selección de cócteles listos para disfrutar, elaborados con ingredientes de alta calidad y entregados directamente en tu puerta.
                </p>
                <p>
                  Explorá nuestra variedad, elegí tus favoritos y preparate para disfrutar de una experiencia de bar en casa sin complicaciones. ¡Hacé tu pedido ahora!
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


