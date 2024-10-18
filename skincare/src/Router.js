// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList/ProductList';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products" element={<ProductList />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;
