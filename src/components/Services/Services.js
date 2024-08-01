import React from 'react';
import development from '../../images/Services1.png';
import web from '../../images/Services2.png';
import consulting from '../../images/Services3.png';

const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <h2>Our Services</h2>
                <div className="services-grid">
                    <div className="service-item">
                        <img src={development} alt="Software Development" />
                        <h3>Software Development</h3>
                        <p>Custom software solutions tailored to your business needs.</p>
                    </div>
                    <div className="service-item">
                        <img src={web} alt="Web Development" />
                        <h3>Web Development</h3>
                        <p>Responsive and modern web applications.</p>
                    </div>
                    <div className="service-item">
                        <img src={consulting} alt="Consulting" />
                        <h3>Consulting</h3>
                        <p>Expert advice to optimize your technology stack.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
