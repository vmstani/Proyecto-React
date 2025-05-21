// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 // const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación de autenticación (en producción usarías una API real)
    if (username === 'admin' && password === 'admin123') {
      login({ username, role: 'admin' });
      navigate('/admin');
    } else if (username === 'user' && password === 'user123') {
      login({ username, role: 'user' });
      navigate('/');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Iniciar Sesión</h2>
        {error && <div className="login-error">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">Usuario</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
              placeholder="Ingresa tu usuario"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          
          <button type="submit" className="login-button">
            Ingresar
          </button>
        </form>
        
        <div className="login-footer">
          <p>¿No tienes cuenta? <a href="/registro" className="register-link">Regístrate aquí</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;