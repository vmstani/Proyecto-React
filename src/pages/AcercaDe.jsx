import React from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import './styleAcercaDe.css';
// Importa la imagen correctamente
import barImage from '../assets/fitness.jpeg'; // Asegúrate que la ruta sea correcta

const AcercaDe = ({ cart, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <h1 className="text-center mb-4">Nosotros</h1>
      <div className="container">
        <div className="text-column">
          <h2>Mi Viaje, Tu Transformación</h2>
          <p>¡Hola! Soy Verónica, y si estás leyendo esto, es probable que compartamos algo en común: la pasión por el bienestar, o al menos la curiosidad por descubrirlo. Este espacio no es solo un sitio web; es el reflejo de años de dedicación, sudor y, sobre todo, aprendizaje en el mundo del fitness</p>
          <p> Mi propia historia en el fitness no empezó con un físico perfecto ni con una rutina de ejercicios impecable. Como muchos, hubo un momento en que sentí que algo faltaba, que mi energía no era la ideal y que mi cuerpo no reflejaba lo que yo quería. Recuerdo claramente en pandemia no podía ir a entrenar y haberme sentido frustrado/a sin saber qué hacer. Esa chispa inicial me llevó a sumergirme de lleno en el entrenamiento, la nutrición y el autoconocimiento.</p>
          <p>No fue un camino lineal. Hubo días de desmotivación, mesetas en el progreso y la constante necesidad de adaptar lo que aprendía a mi propia vida. Experimenté con diversas disciplinas, desde clases de spinning, entrenamiento funcional, siempre buscando entender cómo funciona el cuerpo y cómo sacarle el máximo provecho. Cada error fue una lección, cada logro una confirmación de que con constancia y la información correcta, el cambio es posible</p>
          <p>Con el tiempo, mi obsesión personal se convirtió en una vocación. Decidí que quería ayudar a otros a transitar su propio camino hacia una vida más saludable y fuerte. Me formé en Entrenamiento Personal, Entrenamiento Funcional, Hipopresivos, Spinning, Stretching y he dedicado los últimos años a guiar a personas de todas las edades y niveles a alcanzar sus metas</p>
          <p>Aquí, mi compromiso es compartir contigo todo lo que he aprendido. No te prometo atajos, pero sí un enfoque honesto, basado en la ciencia y adaptado a tus necesidades. Mi objetivo es que encuentres en el fitness no solo un medio para transformar tu cuerpo, sino una herramienta para fortalecer tu mente y potenciar tu vida.</p>
          <p className="signature">Así que, bienvenido/a. ¿Estás listo/a para empezar tu propia transformación?<br /></p>
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
