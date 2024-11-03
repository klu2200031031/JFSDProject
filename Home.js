// Home.js
import React from "react";
import './Home.css';
import logo from './images/logo.webp'; // Ensure this path is correct

function Home() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Heirava Logo" className="logo" />
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/contact-us">Contact Us</a>
          <a href="/signup">Sign Up</a>
        </div>
      </nav>

      <div className="home-container">
        <div className="overlay">
          <div className="home-content">
            <h1>Welcome to Heirava</h1>
            <p>Experience the timeless beauty of handloom artistry.</p>
            <blockquote>"Handloom is the art of the weaver, crafted with soul."</blockquote>
            <button className="explore-button">Explore Collection</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
