import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h2>Contact Us</h2>
                <form>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label>Message:</label>
                        <textarea name="message" required></textarea>
                    </div>
                    <button type="submit" className="btn-primary">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
