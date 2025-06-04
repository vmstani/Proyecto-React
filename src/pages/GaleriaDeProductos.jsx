import React from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import ProductList from '../components/ProductList';
import { useCart } from '../context/CartContext'; 

const GaleriaDeProductos = () => {
  const {
    cart,
    productos: _productosFromContext, 
    cargando,
    handleAddToCart,
    handleDeleteFromCart
  } = useCart();

  
  const h1Styles = {
    textAlign: 'center',
    marginTop: '40px',   
    marginBottom: '20px', 
    color: '#333',       
    fontSize: '2.5em'    
  };
  
  return (
    <>
      <Header borrarProducto={handleDeleteFromCart} cartItems={cart} />
      {/* Aplica los estilos al h1 usando la prop 'style' */}
      <h1 style={h1Styles}>Productos</h1>
      <ProductList agregarCarrito={handleAddToCart} productos={_productosFromContext} cargando={cargando} />
      <Footer />
    </>
  );
};

export default GaleriaDeProductos;
