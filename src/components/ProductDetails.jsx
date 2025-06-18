
import { useParams, Link } from 'react-router-dom';
import Header from './estatics/Header';
import Footer from './estatics/Footer';
import './ProductDetails.css';
import { useCart } from '../context/CartContext'; 



const ProductDetails = () => {
  const { id } = useParams();
  
    const {
      productos: _productosFromContext, 
      handleAddToCart,
      handleDeleteFromCart
    } = useCart();
  const product = _productosFromContext.find(producto => producto.id === Number(id));
  return (
    <>
      <Header />

      <div className="detalle-producto">
        {!product ? (
          <>
            <h2>Producto no encontrado</h2>
            <Link to="/" className="volver-link">← Volver al listado</Link>
          </>
        ) : (
          <>
            <h1 className="detalle-titulo">{product.nombre}</h1>
            <img src={product.imagen} alt={product.nombre} className="detalle-imagen" />
            <p className="detalle-precio"><strong>Precio:</strong> ${product.precio}</p>
            <p className="detalle-stock"><strong>Stock disponible:</strong> {product.stock}</p>
            <p className="detalle-descripcion"><strong>Descripción:</strong> {product.descripcion}</p>
            
      
            <Link to="/productos" className="volver-link">← Volver a productos</Link>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;