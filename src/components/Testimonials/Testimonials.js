import React from 'react';
import testimonialImage from '../../images/testimonials.png';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="container">
                <h2>What Our Clients Say</h2>
                <div className="carousel">
                    <div className="carousel-item">
                        <img src={testimonialImage} alt="Client Testimonial" />
                        <blockquote>"Kingdom Software transformed our business processes!" - Client A</blockquote>
                    </div>
                    <div className="carousel-item">
                        <img src={testimonialImage} alt="Client Testimonial" />
                        <blockquote>"Incredible service and support!" - Client B</blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;