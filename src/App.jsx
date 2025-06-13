import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import AcercaDe from './pages/AcercaDe';
import Contactos from './pages/Contactos';
import GaleriaDeProductos from './pages/GaleriaDeProductos';
import NotFound from './pages/NotFound';
import DetallesProductos from './components/DetallesProductos';
import Login from './pages/Login';
import Admin from './pages/Admin';
import RutaProtegida from './auth/RutasProtegidas';
import { AdminProvider } from './context/AdminContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acercade" element={<AcercaDe />} />
          <Route path="/productos" element={<GaleriaDeProductos />} />
          <Route path="/producto/:id" element={<DetallesProductos />} />
          <Route path="/contacto" element={<Contactos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<RutaProtegida><AdminProvider><Admin /></AdminProvider></RutaProtegida>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={2000} />
      </Router>
    </CartProvider>
  );
}

export default App;
