// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../authContext';

const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth();
    
    return currentUser ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;

