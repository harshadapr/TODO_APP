// import React from 'react';
// import { Box, Heading, Image } from '@chakra-ui/react';
// import { motion } from 'framer-motion';
// import todoImage from '../Images/todo.jpg';

// function Home() {
//     return (
//         <Box textAlign="center" p={8}>
//             <motion.div
//                 initial={{ opacity: 0, y: -50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//             >
//                 <Heading as="h1" size="xl" mb={4} animate={{}}>
//                     Let's Start, with Todos!!!
//                 </Heading>
//             </motion.div>
//             {/* <Image src={todoImage} alt="Todo" maxW="500%" mx="auto" rounded="md" /> */}
//             <Image
//                 src={todoImage}
//                 alt="Todo"
//                 maxW="900px"
//                 maxH="600px"
//                 mx="auto"
//                 rounded="md"
//             />

//         </Box>

//     );
// }

// export default Home;
import { useState, useEffect } from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import todoImage from '../Images/todo.jpg';

function Home() {
    const [showStart, setShowStart] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowStart(true);
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <Box textAlign="center" p={8} >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Heading as="h1" size="xl" mb={4} animate={{}} color="#3182CE">
                    {showStart ? "Let's Start ," : "Let's"}
                </Heading>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
            >
                <Heading as="h1" size="xl" mb={4} color="#4FD1C5">
                    {showStart && " with Todos !!!!!"}
                </Heading>
            </motion.div>
            <Image
                src={todoImage}
                alt="Todo"
                maxW="800px"
                maxH="600px"
                mx="auto"
                rounded="md"
            />
        </Box>
    );
}

export default Home;
