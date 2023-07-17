import React from "react";
import { Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./Components/Home";
import Header from "./Components/Header/";
import LoginForm from "./Components/LoginForm";
import Products from "./Components/Products";
import ProductItemDetails from "./Components/ProductItemDetails";
import Cart from "./Components/Cart";
import ProtectedRoute from "./Components/ProtectedRoute";
import NotFound from "./Components/NotFound";

const App = () => {
  const jwtToken = Cookies.get("jwt_token");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/"
          element={
            <ProtectedRoute jwtToken={jwtToken}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute jwtToken={jwtToken}>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProtectedRoute jwtToken={jwtToken}>
              <ProductItemDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute jwtToken={jwtToken}>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
