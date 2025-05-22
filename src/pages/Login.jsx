import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './styleLogin.css';

function Login() {
  return (
    <div className="login-wrapper">
     

      <Form className="custom-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="form-label">Usuario</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su usuario" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="form-label">Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" />
        </Form.Group>

    

        <Button variant="primary" type="submit" className="custom-button">
          Iniciar sesión
        </Button>

      </Form>
    </div>
  );
}

export default Login;
