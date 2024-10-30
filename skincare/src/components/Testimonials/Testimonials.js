// src/components/Testimonials/Testimonials.js
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Jane Doe',
            role: 'Marketing Specialist',
            text: 'This product has transformed the way we do business! The quality and support are top-notch.',
            image: '/path/to/image1.jpg',
        },
        {
            name: 'John Smith',
            role: 'Product Manager',
            text: 'Fantastic experience! Highly recommend this to anyone looking to elevate their workflow.',
            image: '/path/to/image2.jpg',
        },
        {
            name: 'Emily Johnson',
            role: 'CEO of Tech Solutions',
            text: 'Excellent service and outstanding product. We’ve seen incredible results!',
            image: '/path/to/image3.jpg',
        },
    ];

    return (
        <div id="testimonials" className="testimonials-container"> {/* Add ID here */}
            <h2>What Our Customers Say</h2>
            <div className="testimonials-list">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <h3>{testimonial.name}</h3>
                        <p className="role">{testimonial.role}</p>
                        <p className="testimonial-text">"{testimonial.text}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;

