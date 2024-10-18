// src/components/Home/Home.js
import React from 'react';

const Home = () => {
    const backgroundImageStyle = {
        backgroundImage: "url('https://images.pexels.com/photos/2661255/pexels-photo-2661255.jpeg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Ensures the image is static
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
    };

    return (
        <div style={backgroundImageStyle}>
            <div>
                <h2>Welcome to FirstStop Skincare Home</h2>
                <p>Discover the best products for your skin!</p>
            </div>
        </div>
    );
};

export default Home;

