import React from 'react';
import './Footer.css';

const Footer = () => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {currentYear} Skincare Brand. All rights reserved.</p>
                
                <div className="footer-links">
                    {/* Testimonial Link */}
                    <a href="#testimonials">Customer Testimonials</a>
                </div>
                
                <div className="social-icons">
                    <a href="https://facebook.com/Coffe nuit" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/Darkcoffe89" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
