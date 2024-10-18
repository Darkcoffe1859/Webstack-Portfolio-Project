// src/components/ProductList/ProductList.js
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList = () => {
    // Sample product data
    const products = [
        {
            id: 1,
            title: 'Moisturizing Cream',
            description: 'A rich cream to hydrate and nourish your skin.',
            price: 29.99,
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        {
            id: 2,
            title: 'Sunscreen SPF 50',
            description: 'Protect your skin from harmful UV rays.',
            price: 19.99,
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        {
            id: 3,
            title: 'Gentle Cleanser',
            description: 'A mild cleanser for sensitive skin.',
            price: 15.99,
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        // Add more products as needed
    ];

    return (
        <div className="product-list">
            <h2>Product List</h2>
            <div className="product-list-container">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
