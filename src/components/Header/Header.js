// Header.js
import React from 'react';
import './Header.css'; // Import the CSS file for styling
import logo from '../../images/KSLogo.png';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Kingdom Software Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
