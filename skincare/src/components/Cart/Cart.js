// src/components/Cart/Cart.js
import React, { useState } from 'react';
import { useCart } from '../../CartContext'; // Make sure the path is correct
import { FaTrashAlt, FaShoppingCart } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, updateCartQuantity } = useCart();
    
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [showShippingForm, setShowShippingForm] = useState(false);
    const [paymentDetails, setPaymentDetails] = useState({ name: '', cardNumber: '', expiration: '', cvv: '' });
    const [shippingDetails, setShippingDetails] = useState({ address: '', city: '', state: '', country: '', postalCode: '' });

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleQuantityChange = (productId, newQuantity) => {
        updateCartQuantity(productId, newQuantity);
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        // Perform payment processing here (e.g., API call)
        // After payment is successful, show the shipping form
        setShowPaymentForm(false);
        setShowShippingForm(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails({ ...shippingDetails, [name]: value });
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
                        <button onClick={() => setShowPaymentForm(true)} className="checkout-button" style={{ backgroundColor: 'green' }}>
                            Proceed to Checkout
                        </button>
                        <button className="continue-shopping" style={{ color: 'green' }}>
                            <FaShoppingCart /> Continue Shopping
                        </button>
                    </div>

                    {/* Payment Form */}
                    {showPaymentForm && (
                        <form onSubmit={handlePaymentSubmit} className="payment-form">
                            <h3>Payment Details</h3>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Cardholder Name" 
                                value={paymentDetails.name}
                                onChange={handleInputChange}
                                required
                            />
                            <input 
                                type="text" 
                                name="cardNumber" 
                                placeholder="Card Number" 
                                value={paymentDetails.cardNumber}
                                onChange={handleInputChange}
                                required
                            />
                            <input 
                                type="text" 
                                name="expiration" 
                                placeholder="Expiration Date (MM/YY)" 
                                value={paymentDetails.expiration}
                                onChange={handleInputChange}
                                required
                            />
                            <input 
                                type="text" 
                                name="cvv" 
                                placeholder="CVV" 
                                value={paymentDetails.cvv}
                                onChange={handleInputChange}
                                required
                            />
                            <button type="submit" className="make-payment-button">
                                Make Payment
                            </button>
                        </form>
                    )}

                    {/* Shipping Form */}
                    {showShippingForm && (
                        <form className="shipping-form">
                            <h3>Shipping Details</h3>
                            <input 
                                type="text" 
                                name="address" 
                                placeholder="Address" 
                                value={shippingDetails.address}
                                onChange={handleShippingChange}
                                required
                            />
                            <input 
                                type="text" 
                                name="city" 
                                placeholder="City" 
                                value={shippingDetails.city}
                                onChange={handleShippingChange}
                                required
                            />
                            <input 
                                type="text" 
                                name="state" 
                                placeholder="State" 
                                value={shippingDetails.state}
                                onChange={handleShippingChange}
                                required
                            />
                            <input 
                                type="text" 
                                name="country" 
                                placeholder="Country" 
                                value={shippingDetails.country}
                                onChange={handleShippingChange}
                                required
                            />
                            <input 
                                type="text" 
                                name="postalCode" 
                                placeholder="Postal Code" 
                                value={shippingDetails.postalCode}
                                onChange={handleShippingChange}
                                required
                            />
                            <button type="submit" className="confirm-shipping-button">
                                Confirm Shipping
                            </button>
                        </form>
                    )}
                </>
            )}
        </div>
    );
};

// Make sure to export Cart as default
export default Cart;
