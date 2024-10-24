// src/components/Cart/Cart.js
import React from 'react';
import { useCart } from '../../CartContext'; // Import the useCart hook

const Cart = () => {
    const { cart, removeFromCart } = useCart(); // Get cart and removeFromCart from context

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
