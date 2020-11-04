import React from 'react';
import './navbar.css';


function Navbar() {
    return (
        <section className="navbar">
          <a href="/" className="navbar-item">Home</a>
          <a href="/about" className="navbar-item">About</a>
          <a href="/what_we_do" className="navbar-item">What We Do</a>
          <a href="/donate" className="navbar-item">Donate</a>
          <a href="/contact" className="navbar-item">Contact Us</a>
          <a href="https://www.etsy.com/people/pulmdq54?ref=hdr_user_menu-profile" target = '_blank' className="navbar-item">Shop</a>
      </section>
      )
}

export default Navbar;