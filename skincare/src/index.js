// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import Router from './Router';
import './App.css';

const container = document.getElementById('root'); // Get the root element
const root = createRoot(container); // Use createRoot instead of ReactDOM.render

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

