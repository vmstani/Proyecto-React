import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './styleDetalleProducto.css';
import './styleProductos.css'

const DetallesProductos = ({ productos }) => {
  const { id } = useParams();
  const product = productos.find(producto => producto.id === Number(id));

  if (!product) {
    return (
      <div className="detalle-producto">
        <h2>Producto no encontrado</h2>
        <Link to="/" className="volver-link">Volver al listado</Link>
      </div>
    );
  }

  return (
    <div className="detalle-producto">
      <h1>{product.nombre}</h1>
      <img src={product.imagen} alt={product.nombre} className="detalle-imagen" />
      <p className="detalle-precio"><strong>Precio:</strong> ${product.precio}</p>
      <p className="detalle-stock"><strong>Stock disponible:</strong> {product.stock}</p>
      <p className="detalle-descripcion"><strong>Descripción:</strong> {product.descripcion || 'Sin descripción disponible.'}</p>
      <Link to="/" className="volver-link">← Volver al listado</Link>
    </div>
  );
};

export default DetallesProductos
