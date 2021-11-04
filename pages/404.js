import NextLink from 'next/link';
import{ Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react';

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Not Found</Heading> 
            <Text>Oops... The page you are looking for was not found</Text>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="pink">Return to the main page</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound;