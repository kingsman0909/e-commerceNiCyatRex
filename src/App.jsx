import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup.jsx";
import Login from "./component/Login.jsx";
import "./component-styles/Both.css"
import logo from "./logo.png";

function App() {
  return (
    <Router>
      {/* ✅ Logo section */}
      <div class = "image">
        <img
          src={logo}
          alt="Mannyga Logo"
          
        />
   
      </div>

      {/* ✅ Routes for login/signup */}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
