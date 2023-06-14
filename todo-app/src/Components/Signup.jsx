// import React, { useState } from 'react';
// import {
//     Box,
//     Button,
//     FormControl,
//     FormLabel,
//     Input,
// } from '@chakra-ui/react';

// function Signup() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');

//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Perform signup logic here
//         console.log('Username:', username);
//         console.log('Password:', password);
//         console.log('Email:', email);
//     };

//     return (
//         <Box p={4}>
//             <FormControl>
//                 <FormLabel>Username</FormLabel>
//                 <Input
//                     type="text"
//                     value={username}
//                     onChange={handleUsernameChange}
//                     placeholder="Enter your username"
//                 />
//             </FormControl>

//             <FormControl mt={4}>
//                 <FormLabel>Password</FormLabel>
//                 <Input
//                     type="password"
//                     value={password}
//                     onChange={handlePasswordChange}
//                     placeholder="Enter your password"
//                 />
//             </FormControl>

//             <FormControl mt={4}>
//                 <FormLabel>Email</FormLabel>
//                 <Input
//                     type="email"
//                     value={email}
//                     onChange={handleEmailChange}
//                     placeholder="Enter your email"
//                 />
//             </FormControl>

//             <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
//                 Signup
//             </Button>
//         </Box>
//     );
// }




// export default Signup;


// import React, { useState, useContext } from 'react';
// import {
//     Box,
//     Button,
//     FormControl,
//     FormLabel,
//     Input,
// } from '@chakra-ui/react';
// import { AuthContext } from '../Context/AuthContext';

// function Signup() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const [error, setError] = useState('');
//     const { signup } = useContext(AuthContext);

//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Validate the input fields
//         if (!username || !password || !email) {
//             setError('Please enter username, password, and email');
//             return;
//         }

//         // Perform the signup logic
//         const userData = { username, password, email };
//         const success = signup(userData);

//         if (!success) {
//             setError('Email address is already registered. Please use another email.');
//         } else {
//             setError(''); // Clear the error state if signup is successful
//         }
//     };

//     return (
//         <Box p={4}>
//             <FormControl>
//                 <FormLabel>Username</FormLabel>
//                 <Input
//                     type="text"
//                     value={username}
//                     onChange={handleUsernameChange}
//                     placeholder="Enter your username"
//                 />
//             </FormControl>

//             <FormControl mt={4}>
//                 <FormLabel>Password</FormLabel>
//                 <Input
//                     type="password"
//                     value={password}
//                     onChange={handlePasswordChange}
//                     placeholder="Enter your password"
//                 />
//             </FormControl>

//             <FormControl mt={4}>
//                 <FormLabel>Email</FormLabel>
//                 <Input
//                     type="email"
//                     value={email}
//                     onChange={handleEmailChange}
//                     placeholder="Enter your email"
//                 />
//             </FormControl>

//             {error && <p>{error}</p>}

//             <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
//                 Signup
//             </Button>
//         </Box>
//     );
// }

// export default Signup;


// import React, { useState, useContext } from 'react';
// import {
//     Box,
//     Button,
//     FormControl,
//     FormLabel,
//     Input,
// } from '@chakra-ui/react';
// import { AuthContext } from '../Context/AuthContext';

// function Signup() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const [error, setError] = useState('');
//     const { signup } = useContext(AuthContext);

//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Validate the input fields
//         if (!username || !password || !email) {
//             setError('Please enter username, password, and email');
//             return;
//         }

//         // Perform the signup logic
//         const userData = { username, password, email };
//         const success = signup(userData);

//         if (!success) {
//             setError('Email address is already registered. Please use another email.');
//         } else {
//             setError(''); // Clear the error state if signup is successful
//         }
//     };

//     return (
//         <Box p={4}>
//             <FormControl>
//                 <FormLabel>Username</FormLabel>
//                 <Input
//                     type="text"
//                     value={username}
//                     onChange={handleUsernameChange}
//                     placeholder="Enter your username"
//                 />
//             </FormControl>

//             <FormControl mt={4}>
//                 <FormLabel>Password</FormLabel>
//                 <Input
//                     type="password"
//                     value={password}
//                     onChange={handlePasswordChange}
//                     placeholder="Enter your password"
//                 />
//             </FormControl>

//             <FormControl mt={4}>
//                 <FormLabel>Email</FormLabel>
//                 <Input
//                     type="email"
//                     value={email}
//                     onChange={handleEmailChange}
//                     placeholder="Enter your email"
//                 />
//             </FormControl>

//             {error && <p>{error}</p>}

//             <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
//                 Signup
//             </Button>
//         </Box>
//     );
// }

// export default Signup;


// signup.jsx
// import React, { useState, useContext } from 'react';
// import {
//     Box,
//     Button,
//     FormControl,
//     FormLabel,
//     Input,
// } from '@chakra-ui/react';
// import { AuthContext } from '../Context/AuthContext';

// function Signup() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const [error, setError] = useState('');
//     const [redirectToLogin, setRedirectToLogin] = useState(false); // New state
//     const { signup } = useContext(AuthContext);

//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Validate the input fields
//         if (!username || !password || !email) {
//             setError('Please enter username, password, and email');
//             return;
//         }

//         // Perform the signup logic
//         const userData = { username, password, email };
//         const success = signup(userData);

//         if (!success) {
//             setError('Email address is already registered. Please use another email.');
//         } else {
//             setError(''); // Clear the error state if signup is successful
//             setRedirectToLogin(true); // Set redirectToLogin to true after successful signup
//         }
//     };

//     const redirectToLoginPage = () => {
//         // Implement your navigation logic here to redirect to the login page
//         // For example, you can use window.location.href or any other method that suits your application
//         window.location.href = '/login';
//     };

//     // Check if redirection is needed
//     if (redirectToLogin) {
//         redirectToLoginPage();
//     }

//     return (
//         <Box p={4}>
//             <FormControl>
//                 <FormLabel>Username</FormLabel>
//                 <Input
//                     type="text"
//                     value={username}
//                     onChange={handleUsernameChange}
//                     placeholder="Enter your username"
//                 />
//             </FormControl>

//             <FormControl mt={4}>
//                 <FormLabel>Password</FormLabel>
//                 <Input
//                     type="password"
//                     value={password}
//                     onChange={handlePasswordChange}
//                     placeholder="Enter your password"
//                 />
//             </FormControl>

//             <FormControl mt={4}>
//                 <FormLabel>Email</FormLabel>
//                 <Input
//                     type="email"
//                     value={email}
//                     onChange={handleEmailChange}
//                     placeholder="Enter your email"
//                 />
//             </FormControl>

//             {error && <p>{error}</p>}

//             <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
//                 Signup
//             </Button>
//         </Box>
//     );
// }

// export default Signup;



import React, { useState, useContext } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const { signup, login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate the input fields
        if (!username || !password || !email) {
            setError('Please enter username, password, and email');
            return;
        }

        // Perform the signup logic
        const success = await signup(username, password, email);

        if (!success) {
            setError('Email address is already registered. Please use another email.');
        } else {
            setError('');
            login(username, password);
            navigate('/login'); // Redirect to the login component
        }
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

            <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                />
            </FormControl>

            {error && <p>{error}</p>}

            <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
                Signup
            </Button>
        </Box>
    );
}

export default Signup;
