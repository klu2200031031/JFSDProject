// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./aboutus";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/contact-us">Contact Us</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
}

export default App;
