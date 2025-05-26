import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Ajustá la ruta

function RutaProtegida({ children }) {
  const { isAuthenticated } = useContext(CartContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default RutaProtegida;
