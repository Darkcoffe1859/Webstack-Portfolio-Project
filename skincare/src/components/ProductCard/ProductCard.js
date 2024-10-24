import React from 'react';
import { useCart } from '../../CartContext'; // Import the useCart hook
import './ProductCard.css'; // Ensure you're using a CSS file for styling

const ProductCard = ({ product }) => {
    const { addToCart } = useCart(); // Get addToCart from context

    const handleAddToCart = () => {
        addToCart(product); // Call the function to add the product to the cart
        alert(`${product.name} added to cart!`); // Optional: Show a message
    };

    return (
        <div className="product-card">
            <div className="product-images">
                {product.image ? (  // Change from 'images' to 'image' since it's a single image
                    <img src={product.image} alt={product.name} className="product-image" />
                ) : (
                    <p>No image available</p>
                )}
            </div>

            <div className="product-details">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button className="add-to-cart-button" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
