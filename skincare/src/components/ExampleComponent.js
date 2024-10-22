// src/components/ExampleComponent.js

import React from 'react';
import { setCookie, getCookie, deleteCookie } from '../utils/cookieUtils'; // Import the cookie utility functions

const ExampleComponent = () => {
    const handleSetCookie = () => {
        setCookie('username', 'JohnDoe', 7); // Set a cookie named 'username' with value 'JohnDoe' that expires in 7 days
        console.log('Cookie set'); // Log to the console for debugging
    };

    const handleGetCookie = () => {
        const username = getCookie('username'); // Retrieve the value of the 'username' cookie
        console.log('Retrieved Cookie:', username); // Log the retrieved value to the console
    };

    const handleDeleteCookie = () => {
        deleteCookie('username'); // Delete the cookie named 'username'
        console.log('Cookie deleted'); // Log to the console for debugging
    };

    return (
        <div>
            <button onClick={handleSetCookie}>Set Cookie</button> {/* Button to set the cookie */}
            <button onClick={handleGetCookie}>Get Cookie</button> {/* Button to get the cookie value */}
            <button onClick={handleDeleteCookie}>Delete Cookie</button> {/* Button to delete the cookie */}
        </div>
    );
};

export default ExampleComponent; // Export the component for use in other parts of your app

