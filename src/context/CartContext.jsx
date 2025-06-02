import { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [isAuthenticated, setIsAuth] = useState(false);

  // Cargar productos desde JSON
  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setProductos(data);
          setCargando(false);
        }, 2000);
      })
      .catch(err => {
        console.error('Error al cargar productos:', err);
        setError(true);
        setCargando(false);
      });
  }, []);

  // Agregar producto al carrito
  const handleAddToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + (product.quantity || 1) }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: product.quantity || 1 }]);
    }
  };

  // Eliminar producto del carrito
  const handleDeleteFromCart = (product) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === product.id
            ? item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : null
            : item
        )
        .filter(item => item !== null)
    );
  };

  // Vaciar carrito (opcional)
  const vaciarCarrito = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        productos,
        cargando,
        error,
        handleAddToCart,
        handleDeleteFromCart,
        vaciarCarrito,
        isAuthenticated,
        setIsAuth
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
