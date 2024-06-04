import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./views/register/Register";
import Login from "./views/login/Login";
import Home from "./views/home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { NavBar } from "./components/NavBar";
import CreateProducts from "./views/products/CreateProducts";
import { CartProvider } from "./context/cartContext";
import Orders from "./views/products/Orders";

function App() {
  return (
    <React.Fragment>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/create" element={<CreateProducts />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </CartProvider>
    </React.Fragment>
  );
}

export default App;
