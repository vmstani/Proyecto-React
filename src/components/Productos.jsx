import React, { useState } from 'react';
import './styleProductos.css';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Productos = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  const { handleAddToCart } = useCart();

  const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 : prev));
  const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <section className='card'>
      <Link to={`/producto/${producto.id}`} className="link-detalle">
        <div className='imganContainer'>
          <img src={producto.imagen} alt={producto.nombre} className='imagen' />
        </div>
        <h3 className='nombre'>{producto.nombre}</h3>
      </Link>

      <p className='precio'>${producto.precio}</p>
      <p className='stock'>Disponibles: {producto.stock}</p>

      <div className='cantidadContainer'>
        <button className='qtyButton' onClick={decrease}>-</button>
        <span>{cantidad}</span>
        <button className='qtyButton' onClick={increase}>+</button>
      </div>

      <button
        onClick={() => handleAddToCart({ ...producto, quantity: cantidad })}
        className='qtyButton'>
        Agregar al carrito
      </button>
    </section>
  );
};

export default Productos


