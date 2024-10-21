import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Ensure path is correct
import './SignIn.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous errors

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/'); // Navigate to the home page after successful login
        } catch (error) {
            setError('Failed to sign in. Please check your credentials.');
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-form">
                <h1 className="signin-title">Welcome Back</h1>
                {error && <p className="error">{error}</p>}
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

                <div className="signin-links">
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                    <p><a href="/reset-password">Forgot password?</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

