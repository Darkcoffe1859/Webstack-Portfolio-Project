// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext'; // Import useCart to get cart context
import './Header.css';

const Header = () => {
    const { cart } = useCart(); // Get cart items count from context

    return (
        <header className="header">
            <h1>Skincare Brand</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li>
                        {/* Cart Link */}
                        <Link to="/cart">Cart ({cart.length})</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
