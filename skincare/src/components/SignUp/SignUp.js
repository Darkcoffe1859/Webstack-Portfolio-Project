// src/components/SignUp/SignUp.js
import React from 'react';

const SignUp = () => {
    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;