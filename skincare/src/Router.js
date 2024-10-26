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
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                
                {/* Protected routes */}
                <Route 
                    path="/" 
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/products" 
                    element={
                        <PrivateRoute>
                            <ProductList />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/about" 
                    element={
                        <PrivateRoute>
                            <About />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/contact" 
                    element={
                        <PrivateRoute>
                            <Contact />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/cart" 
                    element={
                        <PrivateRoute>
                            <Cart />
                        </PrivateRoute>
                    } 
                />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;

