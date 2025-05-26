import React from 'react'
import './styleCart.css'

const Cart = ({ cartItems, isOpen, onClose,borrarProducto }) => {

    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2 style={{color:'black'}}>Carrito de Compras</h2>
                <button onClick={onClose} className='close-button'>X</button>
            </div>
            <div className='cart-content'>
                {cartItems.length === 0 ? (<p style={{ color: 'red' }}>El carrito esta vacío</p>) : (<ul className='cart-item'>
                    {cartItems.map((item,index)=>(
                        <>
            <li key={item.id} style={{ color: 'black' }}>
            {item.nombre} - ${item.precio} x {item.quantity}
           <button onClick={() => borrarProducto(item)} className="trash-icon">
  <i className="fa-solid fa-trash"></i>
</button>

            </li>

                        </>
                    ))}
                </ul>)}

            </div>

        </div>
    )
}

export default Cart
