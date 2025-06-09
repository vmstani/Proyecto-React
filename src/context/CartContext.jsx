import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [isAuthenticated, setIsAuth] = useState(false);

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

  const handleAddToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + (product.quantity || 1) }
          : item
      ));
      toast.info(`Se actualizó la cantidad de "${product.nombre}"`);
    } else {
      setCart([...cart, { ...product, quantity: product.quantity || 1 }]);
      toast.success(`"${product.nombre}" agregado al carrito`);
    }
  };

  const handleDeleteFromCart = (product) => {
    const updatedCart = cart
      .map(item =>
        item.id === product.id
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : null
          : item
      )
      .filter(item => item !== null);

    setCart(updatedCart);

    if (updatedCart.length < cart.length) {
      toast.warn(`"${product.nombre}" eliminado del carrito`);
    }
  };

  const vaciarCarrito = () => {
    setCart([]);
    toast.error('Carrito vaciado');
  };

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
