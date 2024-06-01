import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./views/register/Register";
import Login from "./views/login/Login";
import Home from "./views/home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
