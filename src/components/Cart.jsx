import React from 'react';
import './styleCart.css';
import { useCart } from '../context/CartContext'; // Asegurate de que la ruta sea correcta

const Cart = ({ isOpen, onClose }) => {
  const { cart, handleDeleteFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  const handleCheckout = () => {
    alert(`Compra finalizada por $${total.toFixed(2)}`);
    // Aquí podrías vaciar el carrito si querés
  };

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
        <button onClick={onClose} className="close-button">
          <i className="fa-solid fa-times"></i>
        </button>
      </div>

      <div className="cart-content">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <div className="items-container">
            {cart.map((item) => (
              <div key={`${item.id}-${item.quantity}`} className="cart-item">
                <div className="item-info">
                  <span className="item-name">{item.nombre}</span>
                  <span className="item-price">${item.precio.toFixed(2)}</span>
                </div>
                <div className="item-controls">
                  <div className="quantity-controls">
                    <span>Cantidad: {item.quantity}</span>
                  </div>
                  <button
                    onClick={() => handleDeleteFromCart({ ...item, quantity: 1 })}
                    className="remove-item"
                    aria-label="Eliminar producto"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-summary">
          <div className="summary-row total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="checkout-button" onClick={handleCheckout}>
            <i className="fa-solid fa-credit-card"></i> Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

