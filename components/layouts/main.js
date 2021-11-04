import Head from 'next/head';
import Navbar from '../navbar';
import NoSsr from '../no-ssr';
import { Box, Container } from '@chakra-ui/react';
import Setup from '../3d-obj';



const Main = ({ children, router}) => {
    return (
    <Box as="main" pb={8}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Bair's homepage" />
            <meta name="author" content="Bair Suimaliev" />
            <meta name="author" content="bsuimaliev" />
            <link rel="apple-touch-icon" href="apple-touch-icon.png" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/png" />
            <meta property="og:site_name" content="Bair Suimaliev's Homepage" />
            <meta property="og:type" content="website" />
            <title>Bair Suimaliev - Homepage</title>
        </Head>

        <Navbar path={router.asPath} />
        <Container maxW="container.md" pt={14}>
            <NoSsr>
            <Setup />
            </NoSsr>
            {children}
        </Container>
    </Box>
    )
};

export default Main;