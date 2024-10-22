// src/components/Contact/Contact.js
import React, { useState } from 'react';
import { addContact } from '../../services/contactService';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted');
        
        setError('');
        setSuccess('');

        const contactData = { name, email, message };
        console.log('Contact Data:', contactData);

        try {
            const id = await addContact(contactData);
            setSuccess(`Message sent successfully! Your contact ID is ${id}.`);
            console.log('Message sent successfully');
            
            // Clear the form fields
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            setError('Failed to send the message. Please try again.');
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-content">
                <h2>Contact Us</h2>
                <p>
                    We would love to answer your questions about our products or need help with an order. 
                    Feel free to reach out to us using the form below.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>

                    <button type="submit">Send Message</button>
                </form>

                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
            </div>
        </div>
    );
};

export default Contact;

