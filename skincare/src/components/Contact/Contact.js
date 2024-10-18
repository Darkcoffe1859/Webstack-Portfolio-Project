// src/components/Contact/Contact.js
import React from 'react';
import './Contact.css';  // Import the external CSS file

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <h2>Contact Us</h2>
                <p>
                    We would love to answer  questions about our products or need help with an order, feel free to reach out to us using the form below.
                </p>

                <form className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

