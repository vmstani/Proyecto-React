import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styleLogin.css';

function Login() {
  return (
    <div className="login-wrapper">
      <h2 className="login-title">Iniciar sesión</h2>

      <Form className="custom-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="form-label">Usuario</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su usuario" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="form-label">Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recordarme" />
        </Form.Group>

        <Button variant="primary" type="submit" className="custom-button">
          Iniciar sesión
        </Button>

        <p className="register-link">
          ¿No tenés cuenta? <a href="/register">Registrarse</a>
        </p>
      </Form>
    </div>
  );
}

export default Login;
