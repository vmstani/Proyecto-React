import React, { useState } from 'react';
import Header from '../components/estaticos/Header';
import Footer from '../components/estaticos/Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import './styleContactos.css';

const Contactos = ({ cart, borrarProducto }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nombre y apellido son requeridos';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Correo electrónico no válido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Por favor escribe tu mensaje';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulación de envío a API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Formulario enviado:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error al enviar:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      
      <main className="contact-container">
        <div className="contact-header">
          <h1>Contáctanos</h1>
          <p className="contact-subtitle">¿Tienes alguna pregunta? Escríbenos y te responderemos lo antes posible.</p>
        </div>
        
        {submitStatus === 'success' ? (
          <div className="success-message">
            <Alert variant="success" className="text-center">
              <Alert.Heading>¡Gracias por contactarnos!</Alert.Heading>
              <p>Hemos recibido tu mensaje y te responderemos pronto.</p>
            </Alert>
          </div>
        ) : (
          <Form onSubmit={handleSubmit} className="contact-form">
            {submitStatus === 'error' && (
              <Alert variant="danger" className="mb-4">
                <Alert.Heading>Error al enviar</Alert.Heading>
                <p>Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.</p>
              </Alert>
            )}
            
            <Form.Group className="mb-4 form-group-custom" controlId="formBasicName">
              <Form.Label className="form-label-custom">Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                placeholder="Ej: Juan Pérez"
                className="form-input-custom"
              />
              <Form.Control.Feedback type="invalid" className="error-feedback">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4 form-group-custom" controlId="formBasicMail">
              <Form.Label className="form-label-custom">Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                placeholder="Ej: ejemplo@correo.com"
                className="form-input-custom"
              />
              <Form.Control.Feedback type="invalid" className="error-feedback">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-4 form-group-custom" controlId="formBasicMessage">
              <Form.Label className="form-label-custom">Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
                placeholder="Escribe tu mensaje aquí..."
                className="form-textarea-custom"
              />
              <Form.Control.Feedback type="invalid" className="error-feedback">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
            
            <div className="text-center mt-4">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Enviando...
                  </>
                ) : 'Enviar'}
              </Button>
            </div>
          </Form>
        )}
      </main>
      
      <Footer />
    </>
  );
};

export default Contactos;