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
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                
                {/* Protected routes */}
                <ProtectedRoute path="/" element={<Home />} />
                <ProtectedRoute path="/products" element={<ProductList />} />
                <ProtectedRoute path="/about" element={<About />} />
                <ProtectedRoute path="/contact" element={<Contact />} />
                <ProtectedRoute path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;


