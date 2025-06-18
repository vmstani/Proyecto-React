import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import ProductDetails from './components/ProductDetails';
import Login from './pages/Login';
import Admin from './pages/Admin';
import ProtectedRoutes from './auth/ProtectedRoutes';
import { AdminProvider } from './context/AdminContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/productos" element={<Gallery/>} />
          <Route path="/producto/:id" element={<ProductDetails />} />
          <Route path="/contacto" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoutes><AdminProvider><Admin /></AdminProvider></ProtectedRoutes>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={2000} />
      </Router>
    </CartProvider>
  );
}

export default App;
