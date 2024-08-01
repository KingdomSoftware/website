import React from 'react';
import './HeroSection.css';
import hero from '../../images/KSHero2.png';

const HeroSection = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
            <div className="container">
                <div className="hero-content">
                    <h1>Transforming Ideas into Software Solutions</h1>
                    <p>Innovative solutions to drive your business forward.</p>
                    <a href="#contact" className="btn-primary">Get Started</a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;