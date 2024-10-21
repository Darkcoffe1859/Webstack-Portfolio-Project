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
import ProtectedRoute from './components/ProtectedRoute'; // Import your ProtectedRoute

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

                {/* Wrap protected routes inside ProtectedRoute */}
                <Route
                    path="/cart"
                    element={
                        <ProtectedRoute>
                            <Cart />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/products"
                    element={
                        <ProtectedRoute>
                            <ProductList />
                        </ProtectedRoute>
                    }
                />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;

