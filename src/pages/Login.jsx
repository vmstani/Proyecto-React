import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styleLogin.css';

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Aquí podrías validar contra un backend o datos fijos
    if (email === 'admin@admin.com' && password === '1234') {
      setIsAuthenticated(true);
      localStorage.setItem('auth', 'true');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-wrapper">
      <Form onSubmit={handleLogin} className="custom-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="form-label">Usuario</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="form-label">Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="custom-button">
          Iniciar sesión
        </Button>
      </Form>
    </div>
  );
}

export default Login;

