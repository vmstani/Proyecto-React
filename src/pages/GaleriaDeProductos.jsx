import React, { useState } from 'react';
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

  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = _productosFromContext.filter(producto =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const h1Styles = {
    textAlign: 'center',
    marginTop: '40px',   
    marginBottom: '20px', 
    color: '#333',       
    fontSize: '2.5em'    
  };

  const buscadorContainerStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0 40px 30px 0'
  };

  const inputStyles = {
    padding: '10px',
    fontSize: '1em',
    width: '250px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  return (
    <>
      <Header borrarProducto={handleDeleteFromCart} cartItems={cart} />
      <h1 style={h1Styles}>Productos</h1>

      <div style={buscadorContainerStyles}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={inputStyles}
        />
      </div>

      <ProductList 
        agregarCarrito={handleAddToCart} 
        productos={productosFiltrados} 
        cargando={cargando} 
      />
      <Footer />
    </>
  );
};

export default GaleriaDeProductos;
