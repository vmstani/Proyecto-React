import React from 'react';
import './styleCart.css';

const Cart = ({ cartItems, isOpen, onClose, borrarProducto }) => {
  // Calcular el total sumando precio * cantidad de cada item
  // Eliminamos 'subtotal' y 'impuestos' y simplemente calculamos el 'total' directamente
  const total = cartItems.reduce((acc, item) => acc + (item.precio * item.quantity), 0);

  const handleCheckout = () => {
    // Aquí iría la lógica para procesar el pago
    alert(`Compra finalizada por $${total.toFixed(2)}`);
    // Podrías limpiar el carrito aquí si es necesario
  };

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className='cart-header'>
        <h2>Carrito de Compras</h2>
        <button onClick={onClose} className='close-button'>
          <i className="fa-solid fa-times"></i>
        </button>
      </div>

      <div className='cart-content'>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <div className="items-container">
            {cartItems.map((item) => (
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
                    onClick={() => borrarProducto(item)}
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

      {cartItems.length > 0 && (
        <div className="cart-summary">
          {/* Eliminamos la fila de "Subtotal" y "Impuestos" */}
          <div className="summary-row total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            className="checkout-button"
            onClick={handleCheckout}
          >
            <i className="fa-solid fa-credit-card"></i> Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;