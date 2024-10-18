// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
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
                </ul>
            </nav>
        </header>
    );
};

export default Header;
