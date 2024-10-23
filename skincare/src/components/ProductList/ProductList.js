import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard'; // Ensure this path is correct

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/data/products.json'); // Fetch from the public folder
                const data = await response.json();
                setProducts(data); // Set the fetched data
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
};

export default ProductList;
