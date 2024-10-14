// Header.js
import React from 'react';
import './Header.css'; // Import the CSS file for styling
import logo from '../../images/KSLogo.png';
import { Squash as Hamburger } from "hamburger-react";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Kingdom Software Logo" />
            </div>
            <div className="lg:hidden ">
                <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
                {isOpen && (
                    <div className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
                        <ul className="grid gap-2">
                            <li><a href="#services">Services</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
            )}
            </div>
            <nav>
                <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
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
