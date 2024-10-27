// src/components/SignIn/SignIn.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Import Firebase auth instance
import './SignIn.css'; // Import CSS for styling

const SignIn = () => {
    // State hooks for managing email, password, and error messages
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handler function for signing in
    const handleSignIn = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous errors

        try {
            // Attempt to sign in with email and password
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/'); // Redirect to home page upon successful login
        } catch (error) {
            // Log error details for debugging
            console.error("Error signing in:", error);

            // Set error message based on Firebase error codes
            switch (error.code) {
                case 'auth/network-request-failed':
                    setError("Network error. Please check your connection.");
                    break;
                case 'auth/user-not-found':
                    setError("No user found with this email.");
                    break;
                case 'auth/wrong-password':
                    setError("Incorrect password. Please try again.");
                    break;
                case 'auth/too-many-requests':
                    setError("Too many attempts. Please try again later.");
                    break;
                default:
                    setError("Error signing in. Please try again.");
                    break;
            }
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-form">
                <h1 className="signin-title">Welcome Back</h1>
                
                {/* Display error message if present */}
                {error && <p className="error">{error}</p>}
                
                {/* Sign-in form */}
                <form onSubmit={handleSignIn}>
                    <input
                        type="email"
                        className="signin-input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        className="signin-input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="signin-button">Sign In</button>
                </form>

                {/* Additional links for sign-up and password reset */}
                <div className="signin-links">
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                    <p><a href="/reset-password">Forgot password?</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

