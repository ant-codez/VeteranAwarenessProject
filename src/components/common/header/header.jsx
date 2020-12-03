import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../img/logo.png'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './header.css'

function Header() {
    return (
        <Navbar collapseOnSelect expand='sm' variant = 'light'>
            <Navbar.Brand href = '/'>
              <Image 
              src = {logo} 
              style = {{width : '75px', height : '75px'}}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id = 'responsive-navbar-nav'>
              <Nav>
                <Nav.Link href = '/'>Home</Nav.Link>
                <Nav.Link href = '/about'>About</Nav.Link>
                <Nav.Link href = '/What_we_do'>What We Do</Nav.Link>
                <Nav.Link href = '/contact'>Contact Us</Nav.Link>
                <Nav.Link href = '/calendar'>Calendar</Nav.Link>
                <Nav.Link target = '_blank' href = 'https://www.paypal.me/selfcarefun'>Donate</Nav.Link>
                <Nav.Link target = '_blank' href = 'https://www.etsy.com/people/pulmdq54?ref=hdr_user_menu-profile'>Shop</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      )
}

export default Header;