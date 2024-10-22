import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import Router from './Router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { AuthProvider } from './authContext'; // Import AuthProvider for authentication context
import { CartProvider } from './CartContext'; // Import CartProvider for cart context

const container = document.getElementById('root'); // Get the root element
const root = createRoot(container); // Use createRoot instead of ReactDOM.render

root.render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap the entire app with AuthProvider */}
      <CartProvider> {/* Wrap the entire app with CartProvider */}
        <Router />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);

