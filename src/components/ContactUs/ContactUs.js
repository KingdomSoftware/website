// ContactUs.js
import React, { useState } from 'react';
import Modal from 'react-modal'; // Import the react-modal library
import './ContactUs.css'; // Import the CSS file for styling

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to a server)

    // For now, let's just log the form data
    console.log('Form submitted:', { name, email, message });

    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');

    // Close the modal after submission
    closeModal();
  };

  return (
    <section id="contact">
      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Feel free to reach out to us using the form below, and we'll get back to you as soon as possible.
        </p>
        <button onClick={openModal}>Open Contact Form</button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Contact Form Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="form-container">
            <h2>Contact Us <a onClick={closeModal}>X</a></h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </label>
              <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </label>
              <label>
                Message:
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default ContactUs;
