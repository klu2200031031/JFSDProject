// AboutUs.js
import React from "react";
import './App.css';
import './aboutus.css';
import logo from './images/logo.webp'; // Adjust the path to your image

function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <h1>About Us</h1>
        <p>
          Welcome to Heirava, where we celebrate the art of handloom weaving. Our mission is to preserve and promote traditional handloom techniques while providing exquisite handcrafted products to our customers.
        </p>
      </div>
      <div className="aboutus-image">
        <img src={logo} alt="About Heirava" className="about-image" />
      </div>
    </div>
  );
}

export default AboutUs;
