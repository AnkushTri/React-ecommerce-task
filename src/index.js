import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {CartProvider} from './Components/Context/CartContext';
import { AuthProvider } from './Components/store/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <CartProvider> 
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </CartProvider>
  </AuthProvider>
);
 
reportWebVitals();