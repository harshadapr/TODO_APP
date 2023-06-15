import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const login = (userData) => {
        const { username, password } = userData;

        const mockUsername = 'admin';
        const mockPassword = 'password';

        if (username === mockUsername && password === mockPassword) {
            setUser(userData);
        } else {
            console.log('Invalid username or password');
        }
    };



    const signup = (userData) => {
        const { username, password, email } = userData;


        const isEmailRegistered = checkEmailRegistered(email);

        if (isEmailRegistered) {
            return false;
        } else {
            setUser(userData);
            return true;
        }
    };

    const checkEmailRegistered = (email) => {

        const mockRegisteredEmail = 'registered@example.com';
        return email === mockRegisteredEmail;
    };

    const logout = () => {
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
