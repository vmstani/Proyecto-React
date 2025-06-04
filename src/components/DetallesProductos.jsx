import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './estaticos/Header';
import Footer from './estaticos/Footer';
import ProductList from './ProductList';
import './DetalleProducto.css';

const DetallesProductos = ({ productos, agregarCarrito }) => {
  const { id } = useParams();
  const product = productos.find(producto => producto.id === Number(id));

  return (
    <>
      <Header />

      <main className="detalle-producto">
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
            <p className="detalle-descripcion"><strong>Descripción:</strong> {product.descripcion || 'Sin descripción disponible.'}</p>
      
            <Link to="/productos" className="volver-link">← Volver a productos</Link>
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

export default DetallesProductos;

