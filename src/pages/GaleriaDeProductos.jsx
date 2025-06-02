import React from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import ProductList from '../components/ProductList';
import { useCart } from '../context/CartContext'; // Ajustá la ruta si es necesario

const GaleriaDeProductos = () => {
  const {
    cart,
    productos,
    cargando,
    handleAddToCart,
    handleDeleteFromCart
  } = useCart();

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

