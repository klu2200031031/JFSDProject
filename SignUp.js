// pages/SignUp.js
import React from "react";
import { Link } from "react-router-dom";
import './SignUp.css';

function SignUp() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default SignUp;
