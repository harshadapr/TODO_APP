


import React, { useState, useContext } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, user, logout } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate the input fields
        if (!username || !password) {
            // setError('Please enter username and password');
            window.alert('Wrong username or password');

            // return;
        }

        const userData = { username, password };
        const success = login(userData);

        if (!success) {
            setError('Wrong username or password');
            // window.alert('Wrong username or password');

        }
        else {
            setError('');
        }
    };

    if (user) {
        return <Navigate to="/dashboard" />;
    }

    const handleLogout = () => {
        logout();
        // navigate('/login');
        window.location.href = '/login';


    };

    return (
        <Box p={4}>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Enter your username"
                />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                />
            </FormControl>

            <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
                Login
            </Button>

            {user && (
                <Button mt={4} colorScheme="red" onClick={handleLogout}>
                    Logout

                </Button>
            )}

        </Box>
    );
}

export default Login;
