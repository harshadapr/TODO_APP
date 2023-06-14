// AuthContext.js
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const login = (userData) => {
        // Perform the login logic here
        const { username, password } = userData;

        // Mock username and password data for demonstration
        const mockUsername = 'admin';
        const mockPassword = 'password';

        if (username === mockUsername && password === mockPassword) {
            // Login successful, set the user data
            setUser(userData);
        } else {
            // Login failed, display an error message or handle it as needed
            console.log('Invalid username or password');
        }
    };



    const signup = (userData) => {
        // Perform the signup logic here
        const { username, password, email } = userData;

        // Check if the email address is already registered
        // Replace this with your actual logic to check for duplicate emails
        const isEmailRegistered = checkEmailRegistered(email);

        if (isEmailRegistered) {
            // Email address is already registered
            return false;
        } else {
            // Signup successful, set the user data
            setUser(userData);
            return true;
        }
    };

    const checkEmailRegistered = (email) => {
        // Replace this with your actual logic to check if the email is registered
        // For demonstration, we're considering an email registered if it matches a mock email
        const mockRegisteredEmail = 'registered@example.com';
        return email === mockRegisteredEmail;
    };

    const logout = () => {
        // Perform the logout logic and clear the user data
        setUser(null);
        // setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
