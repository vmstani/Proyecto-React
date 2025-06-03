import React from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import ProductList from '../components/ProductList';
import { useCart } from '../context/CartContext'; 
import { useState } from 'react';
const GaleriaDeProductos = () => {
  const {
    cart,
    _productos,
    cargando,
    handleAddToCart,
    handleDeleteFromCart
  } = useCart();

  const [productos, setProductos] = useState(JSON.parse(localStorage.getItem('productos')))
 
  return (
    <>
      <Header borrarProducto={handleDeleteFromCart} cartItems={cart} />
      <h1>Productos</h1>
      <ProductList agregarCarrito={handleAddToCart} productos={productos} cargando={cargando} />
      <Footer />
    </>
  );
};

export default GaleriaDeProductos;

