import React from 'react';
import Productos from './Productos';
import { useCart } from '../context/CartContext'; 

const ProductList = ({ productos }) => {
  const { handleAddToCart } = useCart();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {productos.map(producto => (
        <Productos key={producto.id} producto={producto} agregarCarrito={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
