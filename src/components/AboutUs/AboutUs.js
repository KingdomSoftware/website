import React from 'react';
import aboutUsImage from '../../images/aboutUs.png'; // Update with actual path

const AboutUs = () => {
    return (
        <section id="about">
            <div className="container">
                <h2>About Us</h2>
                <div className="about-content">
                    <img src={aboutUsImage} alt="Transparency and Correctness" className="about-us-image" />
                    <div className="about-text">
                        <p>At Kingdom Software, we pride ourselves on transparency and correctness. Our commitment to delivering high-quality software solutions is rooted in providing clear and accurate information to our clients and users.</p>
                        <p>Transparency is at the core of our values, and we strive to build trust by ensuring openness in our processes and communications. Our goal is to deliver software that not only meets your expectations but exceeds them.</p>
                        <h3>Company Overview</h3>
                        <p>Kingdom Software is a technology company dedicated to providing cutting-edge solutions for businesses of all sizes. Established in 2023, we strive to deliver software products and services that empower our clients to thrive in the digital landscape.</p>
                        <p>Our company values transparency, correctness, and a relentless pursuit of excellence. With a customer-centric approach, we prioritize understanding the unique needs of our clients and delivering tailored solutions that drive success.</p>
                        <p>At Kingdom Software, we believe in fostering a collaborative and inclusive work environment. We are passionate about technology and committed to pushing the boundaries of what's possible.</p>
                        <h3>Our Mission</h3>
                        <p>At Kingdom Software, our mission is to empower businesses with innovative and reliable software solutions. We are dedicated to providing transparency in our processes, ensuring our clients have a clear understanding of every stage of development. Through a commitment to correctness, we strive to deliver products that not only meet but exceed expectations, fostering trust and confidence in our technology.</p>
                        <h3>Our Vision</h3>
                        <p>Our vision at Kingdom Software is to be a beacon of transparency and correctness in the software industry. We envision a future where businesses seamlessly integrate technology into their operations, guided by solutions that are not only cutting-edge but also built on the principles of honesty and precision. Through continuous innovation and a steadfast commitment to transparency, we aim to set the standard for excellence in software development, inspiring confidence in our clients and partners.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;