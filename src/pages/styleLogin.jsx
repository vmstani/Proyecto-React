/* styleLogin.css */
:root {
  --primary: #a014d8;
  --primary-dark: #8b10c0;
  --primary-light: #d9b2e9;
  --error: #e74c3c;
  --error-light: #ffebee;
  --text: #2c3e50;
  --text-light: #7f8c8d;
  --border: #e0e0e0;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 2rem;
  background: linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%);
  animation: fadeIn 0.6s ease-out;
}

.login-card {
  background-color: white;
  border-radius: 16px;
  box-shadow: var(--shadow);
  padding: 2.5rem;
  width: 100%;
  max-width: 450px;
  border: none;
  transform: translateY(0);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.login-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.login-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--primary), var(--primary-dark));
}

.login-title {
  color: var(--primary);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  position: relative;
  padding-bottom: 0.5rem;
}

.login-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--primary);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
}

.form-label {
  color: var(--text);
  font-weight: 600;
  font-size: 0.95rem;
  margin-left: 0.5rem;
}

.form-input {
  padding: 1rem 1.2rem;
  border: 2px solid var(--border);
  border-radius: 10px;
  font-size: 1rem;
  transition: var(--transition);
  background-color: #fafafa;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
  background-color: white;
  box-shadow: 0 0 0 4px rgba(160, 20, 216, 0.1);
}

.form-input::placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

.login-button {
  background: linear-gradient(to right, var(--primary), var(--primary-dark));
  color: white;
  border: none;
  padding: 1.1rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  margin-top: 0.5rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
}

.login-button:hover {
  background: linear-gradient(to right, var(--primary-dark), var(--primary));
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(160, 20, 216, 0.3);
}

.login-button:active {
  transform: translateY(0);
}

.login-error {
  color: var(--error);
  background-color: var(--error-light);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.2rem;
  text-align: center;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  animation: shake 0.4s ease;
}

.login-error::before {
  content: '!';
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: var(--error);
  color: white;
  border-radius: 50%;
  font-weight: bold;
}

.login-footer {
  margin-top: 2rem;
  text-align: center;
  color: var(--text-light);
  font-size: 0.9rem;
}

.register-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  position: relative;
}

.register-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: var(--transition);
}

.register-link:hover::after {
  width: 100%;
}

.register-link:hover {
  text-decoration: none;
}

/* Animaciones */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
}

/* Responsive */
@media (max-width: 768px) {
  .login-container {
    padding: 1.5rem;
    min-height: calc(100vh - 100px);
  }
  
  .login-card {
    padding: 2rem 1.5rem;
  }
  
  .login-title {
    font-size: 1.6rem;
    margin-bottom: 1.8rem;
  }
  
  .login-form {
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .login-card {
    padding: 1.8rem 1.2rem;
    border-radius: 12px;
  }
  
  .login-title {
    font-size: 1.4rem;
  }
  
  .form-input {
    padding: 0.9rem 1rem;
  }
  
  .login-button {
    padding: 1rem;
  }
}