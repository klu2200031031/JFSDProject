// pages/ContactUs.js
import React from "react";
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>Email: info@heirava.com</p>
        <p>Phone: +918987564322</p>
      </div>
      <form className="contact-form">
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
