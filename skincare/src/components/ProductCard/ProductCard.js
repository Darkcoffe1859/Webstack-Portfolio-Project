// src/components/ProductCard/ProductCard.js
import React from 'react';
import { useCart } from '../../CartContext'; // Import the useCart hook

const ProductCard = ({ product }) => {
    const { addToCart } = useCart(); // Get addToCart from context

    const handleAddToCart = () => {
        addToCart(product); // Call the function to add the product to the cart
        alert(`${product.name} added to cart!`); // Optional: Show a message
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;

