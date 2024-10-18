// src/components/SignIn/SignIn.js
import React from 'react';

const SignIn = () => {
    return (
        <div>
            <h2>Sign In</h2>
            <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
