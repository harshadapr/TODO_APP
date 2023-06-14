import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import todoImage from '../Images/todo.jpg';

function Home() {
    return (
        <Box textAlign="center" p={8}>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Heading as="h1" size="xl" mb={4} fontStyle="italic" animate={{}}>
                    Let's Start Todos
                </Heading>
            </motion.div>
            <Image src={todoImage} alt="Todo" maxW="100%" mx="auto" rounded="md" />


        </Box>

    );
}

export default Home;
