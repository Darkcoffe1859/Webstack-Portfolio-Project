// src/components/SignUp/SignUp.js

import React, { useState } from 'react';
import { auth } from '../../firebase'; // Import auth from your firebase configuration
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './SignUp.css'; // Make sure to create this CSS file for styling

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess("Account created successfully!");
            setError(''); // Clear any existing errors
            // Optionally, you can redirect the user or clear the form here
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input
                    type="email"
                    className="signup-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="signup-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="signup-input"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit" className="signup-button">Sign Up</button>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
            </form>
        </div>
    );
};

export default SignUp;

