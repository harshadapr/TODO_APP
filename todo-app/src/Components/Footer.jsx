import { Box, Flex, Image } from '@chakra-ui/react';
import image1 from '../Images/todo.jpg';
import image2 from '../Images/todo.jpg';
import image3 from '../Images/todo.jpg';
import image4 from '../Images/todo.jpg';
import image5 from '../Images/todo.jpg';
import image6 from '../Images/todo.jpg';

function Footer() {
    return (
        <Box bg="#F5F7FA" p={4}>
            <Flex overflowX="scroll" flexWrap="nowrap" bg="#16191f">
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />
                <Image src={image1} boxSize="200px" m={3} rounded="full" />

            </Flex>
        </Box>
    );
}

export default Footer;
