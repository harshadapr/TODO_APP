

import React, { useContext } from 'react';
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';

function Navbar() {
    const { user, logout } = useContext(AuthContext);

    return (
        <Flex alignItems="center" bg="gray.200" p={4}>
            <Box>
                <Link to="/home">
                    <Button colorScheme="blue" mr={4}>
                        Todo App
                    </Button>
                </Link>
            </Box>

            {user ? (
                <>
                    <Spacer />
                    <Button colorScheme="red" onClick={logout}>
                        Logout
                    </Button>
                </>
            ) : (
                <>
                    <Link to="/signup">
                        <Button colorScheme="blue" mr={4}>
                            Sign Up
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button colorScheme="green">Login</Button>
                    </Link>
                </>
            )}
        </Flex>
    );
}

export default Navbar;
