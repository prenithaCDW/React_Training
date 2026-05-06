import React from 'react'
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Login from "./pages/Login/Login.jsx";
import Category from "./pages/Category/Category.jsx";
import Premium from "./pages/Premium/Premium.jsx";
import ConfirmOrder from "./pages/ConfirmOrder/ConfirmOrder.jsx";
import Layout from './layouts/Layout.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import { CartProvider } from './context/CartContext.jsx';
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/categories/couch" replace />} />
              <Route path="/categories/:category" element={<Category />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/premium" element={<Premium />} />
              </Route>
              <Route path="/confirmOrder" element={<ConfirmOrder />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App