import React from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import bannerImage from '../assets/gym.jpg';
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
          <h1 className="hero-title">¡Bienvenido/a a tu punto de  partida hacia una vida saludable!</h1>
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
                  Creemos que el fitness es mucho más que ejercicio; es una herramienta para transformar tu vida. Aquí, encontrarás la guía, la inspiración y los recursos que necesitas para alcanzar tus metas de bienestar, sin importar cuál sea tu punto de partida.
                </p>
              </div>
              
              <div className="text-block">
                <p>
                  Sabemos que el camino hacia una vida activa puede parecer abrumador. Tal vez has intentado antes y no lograste mantener la constancia, o quizás estás dando tus primeros pasos y no sabes por dónde empezar. ¡No te preocupes! Mi trayectoria personal en el fitness me enseñó que la clave está en la información correcta, la adaptación a tus necesidades y un apoyo genuino.
                </p>
                <div className="highlight-box">
                  <p>¡Tu próximo transformación comienza aquí!</p>
                </div>
              </div>
              
              <div className="text-block">
                <h3 className="callout-title">¿Listo/a para dar el primer paso hacia la mejor versión de ti? ¡Estamos aquí para ayudarte a lograrlo!</h3>
                <p className="callout-text">
                  ¡Llegaste al lugar indicado! Te ofrecemos planes para todos los niveles.
                </p>
                <p>
                  Explora nuestra galería de productos para encontrar lo que te impulse, sumérgete en el apartado "Acerca de Nosotros" para conocer mi historia y mi filosofía, y no dudes en contactarnos para cualquier consulta.
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


