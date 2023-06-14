// import React from "react";
// import styled from "styled-components";

// // Styled components
// const NavbarContainer = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background-color: #f0f0f0;
//   padding: 1rem;
// `;

// const NavLogo = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
// `;

// const NavButtons = styled.div`
//   display: flex;
//   gap: 1rem;
// `;

// const NavButton = styled.button`
//   padding: 0.5rem 1rem;
//   border: none;
//   border-radius: 4px;
//   background-color: #ccc;
//   color: #fff;
//   cursor: pointer;
// `;

// const CenteredImage = styled.img`
//   display: block;
//   margin: 2rem auto;
//   max-width: 100%;
// `;

// // Navbar component
// function Navbar() {
//     return (
//         <>
//             <NavbarContainer>
//                 <NavLogo>Logo</NavLogo>
//                 <NavButtons>
//                     <NavButton>Signup</NavButton>
//                     <NavButton>Login</NavButton>
//                 </NavButtons>
//             </NavbarContainer>
//             <CenteredImage src="https://example.com/random-image.jpg" alt="Random" />
//         </>
//     );
// }

// export default Navbar;
// import { Box, Button, Flex, Image, Spacer } from "@chakra-ui/react";

// function Navbar() {
//     return (
//         <Flex alignItems="center" bg="gray.200" p={4}>
//             <Box>
//                 <Button colorScheme="blue" mr={4}>
//                     Sign Up
//                 </Button>
//                 <Button colorScheme="green">Login</Button>
//             </Box>
//             <Spacer />

//         </Flex>
//     );
// }

// export default Navbar;
// import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
// import { Link } from 'react-router-dom';

// function Navbar() {
//     return (
//         <Flex alignItems="center" bg="gray.200" p={4}>
//             <Box>
//                 <Link to="/signup">
//                     <Button colorScheme="blue" mr={4}>
//                         Sign Up
//                     </Button>
//                 </Link>
//                 <Link to="/login">
//                     <Button colorScheme="green">Login</Button>
//                 </Link>
//             </Box>
//             <Spacer />
//         </Flex>
//     );
// }

// export default Navbar;
// import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

// function Navbar() {
//     return (
//         <Flex alignItems="center" bg="gray.200" p={4}>
//             <Box>
//                 <Link to="/todos">
//                     <Button colorScheme="blue" mr={4}>
//                         Todo App
//                     </Button>
//                 </Link>
//                 <Link to="/signup">
//                     <Button colorScheme="blue" mr={4}>
//                         Sign Up
//                     </Button>
//                 </Link>
//                 <Link to="/login">
//                     <Button colorScheme="green">Login</Button>
//                 </Link>
//             </Box>
//             <Spacer />
//         </Flex>
//     );
// }

// export default Navbar;

import React, { useContext } from 'react';
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';

function Navbar() {
    const { user, logout } = useContext(AuthContext);

    return (
        <Flex alignItems="center" bg="gray.200" p={4}>
            <Box>
                <Link to="/">
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
