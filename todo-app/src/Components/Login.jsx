// import React, { useState } from 'react';
// import {
//     Box,
//     Button,
//     FormControl,
//     FormLabel,
//     Input,

// } from '@chakra-ui/react';

// function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Perform login logic here
//         console.log('Username:', username);
//         console.log('Password:', password);
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

//             <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
//                 Login
//             </Button>
//         </Box>
//     );
// }



// export default Login;





// // import React, { useEffect } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { deleteTodo, getData, patchData } from "../Redux/action";

// // function TodoDisplay() {
// //     const todos = useSelector(state => state.todos);

// //     // console.log(todos);

// //     let dispatch = useDispatch()
// //     useEffect(() => {
// //         dispatch(getData())
// //     }, [])

// //     return (
// //         <div>
// //             <h1>Display</h1>
// //             {todos.map((e) => {
// //                 return (
// //                     <div>
// //                         <h2>{e.title}</h2>
// //                         <button onClick={() => dispatch(patchData(e.id, e.status))}>{e.status ? "completed" : "Pending"}</button>
// //                         <button onClick={() => { dispatch(deleteTodo(e.id)) }} >  Delete Task</button>
// //                     </div>

// //                 )
// //             })}
// //         </div>
// //     );
// // }

// // export default TodoDisplay;

// import React, { useState, useContext } from 'react';
// import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
// import { AuthContext } from '../Context/AuthContext';
// import { Navigate } from 'react-router-dom';

// function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const { login, user } = useContext(AuthContext);

//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Validate the input fields
//         if (!username || !password) {
//             setError('Please enter username and password');
//             window.alert('Please enter username and password')
//             // return;
//         }

//         // Perform the login logic
//         const userData = { username, password };
//         login(userData);
//     };

//     // Redirect to the dashboard if the user is already logged in
//     if (user) {
//         return <Navigate to="/dashboard" />;
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

//             {error && (
//                 <Box mt={4} color="red.500">
//                     {error}
//                 </Box>
//             )}

//             <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
//                 Login
//             </Button>
//         </Box>
//     );
// }

// export default Login;


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

        // Perform the login logic
        const userData = { username, password };
        const success = login(userData);

        if (!success) {
            setError('Wrong username or password');
            // window.alert('Wrong username or password');

        }
        else {
            setError(''); // Clear the error state if login is successful
        }
    };

    // Redirect to the dashboard if the user is already logged in
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
