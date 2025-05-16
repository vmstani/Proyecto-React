import React from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import './styleAcercaDe.css';
// Importa la imagen correctamente
import barImage from '../assets/bar.jpg'; // Asegúrate que la ruta sea correcta

const AcercaDe = ({ cart, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <h1 className="text-center mb-4">Acerca De</h1>
      <div className="container">
        <div className="text-column">
          <h2>Un Brindis por las Buenas Historias (y los Buenos Tragos)</h2>
          <p>En Che, Trago Va, creemos que cada botella tiene una historia y cada encuentro en nuestra barra puede convertirse en una. Somos más que un lugar para beber; somos un espacio donde se forjan recuerdos, donde las preocupaciones se diluyen con el hielo y donde la noche siempre promete algo interesante.</p>
          <p>Nuestra aventura comenzó con una simple idea: crear un bar que celebre la cultura del buen beber en el corazón de Buenos Aires. Queríamos un lugar con alma, donde la calidad de las bebidas se igualara a la calidez del ambiente. Por eso, dedicamos tiempo y pasión a seleccionar cada destilado, a experimentar con combinaciones de sabores y a perfeccionar esos cócteles clásicos que nunca fallan.</p>
          <p>Aquí vas a encontrar desde ese whisky añejo que invita a la reflexión hasta ese vermut artesanal que evoca las tradiciones porteñas. Nuestra carta es un viaje a través de diferentes aromas y texturas, pensada para acompañar cada estado de ánimo y cada conversación. Y si no encontrás exactamente lo que buscás, no dudes en preguntar a nuestros bartenders. Son alquimistas de la barra, listos para crear algo especial para vos.</p>
          <p>Pero más allá de lo que servimos, lo que realmente nos define es la gente que cruza nuestra puerta. Amigos que se reencuentran, parejas que celebran, solitarios que buscan una charla amena… Che, Trago Va es un crisol de experiencias y personalidades, un lugar donde todos son bienvenidos.</p>
          <p>Así que, si estás buscando un respiro después de un largo día, un lugar para celebrar una ocasión especial o simplemente un buen trago en un ambiente relajado y auténtico, te esperamos con las puertas abiertas. Vení a ser parte de nuestra historia.</p>
          <p className="signature">El equipo de Che, Trago Va<br /></p>
        </div>
        <div className="image-column">
          {/* Usa la imagen importada */}
          <img src={barImage} alt="Imagen de nuestro bar Che, Trago Va" className="bar-image" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AcercaDe;
