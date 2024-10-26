// src/components/Cart/Cart.js
import React from 'react';
import { useCart } from '../../CartContext'; // Make sure the path is correct
import { FaTrashAlt, FaShoppingCart } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, updateCartQuantity } = useCart();

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleQuantityChange = (productId, newQuantity) => {
        updateCartQuantity(productId, newQuantity);
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price}</p>
                                    <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <div className="quantity-controls">
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="remove-button">
                                    <FaTrashAlt style={{ color: 'red' }} />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <h3>Total: ${calculateTotal()}</h3>
                    </div>
                    <div className="cart-actions">
                        <button className="checkout-button" style={{ backgroundColor: 'green' }}>
                            Proceed to Checkout
                        </button>
                        <button className="continue-shopping" style={{ color: 'green' }}>
                            <FaShoppingCart /> Continue Shopping
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

// Make sure to export Cart as default
export default Cart;

