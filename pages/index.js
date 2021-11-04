import NextLink from 'next/link'
import { 
    Button, 
    Container, 
    Box, 
    Heading, 
    Image, 
    Link,
    Icon,
    SimpleGrid,
    useColorModeValue } from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import Layout from '../components/layouts/article';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';
import { GridItem } from '../components/grid-item';
import { IoLogoInstagram, IoLogoGithub, IoLogoTwitter } from 'react-icons/io5';

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius = "lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a college student, majoring in Computer Programming.
                </Box>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Bair Suimaliev
                        </Heading>
                        <p>Starting Web/Software Developer</p>
                    </Box>
                    <Box flexShrink={0} 
                    mt={{base:4, md:0}} 
                    ml={{md:6}} 
                    align="center"
                    >
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="100%" src="/images/myself.png" alt="Profile Image"/>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About myself
                    </Heading>
                    <Paragraph>Bair is a college student, moved from Bishkek, Kyrgyzstan to Toronto, Canada, eager to gain first work experience for professional growth as a developer in exchange for an ethical and responsible approach to work as well as being open to learning.</Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="pink">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2002</BioYear>
                            Born in Bishkek, Kyrgyzstan.
                    </BioSection>
                    <BioSection>
                        <BioYear>2020 - 2022</BioYear>
                        Studying for Ontario College Diploma in Computer Programmer at Seneca College.
                    </BioSection>
                
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Find me on:
                    </Heading>
                    <SimpleGrid columns={3}>
                        <GridItem>
                            <Link href="https://github.com/Benefactor131" target="_blank">
                                <Button 
                                variant="ghost" 
                                colorScheme="pink" 
                                leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @bsuimaliev
                                </Button>
                            </Link>
                        </GridItem>
                        <GridItem>
                            <Link href="https://instagram.com/bb.suimaliev" target="_blank">
                                <Button
                                variant="ghost"
                                colorScheme="pink"
                                leftIcon={<Icon as={IoLogoInstagram} />}
                                >
                                @bsuimaliev
                                </Button>
                            </Link>
                        </GridItem>
                        <GridItem>
                            <Link href="https://twitter.com/bsuimaliev" target="_blank">
                                <Button
                                variant="ghost"
                                colorScheme="pink"
                                leftIcon={<Icon as={IoLogoTwitter} />}
                                >
                                @bsuimaliev
                                </Button>
                            </Link>
                        </GridItem>
                    </SimpleGrid>
                </Section>    
            </Container>
        </Layout>
    )
    
}

export default Page;