import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbWildlifeWalk from '../public/images/works/thumbWLW.png';
import thumbBsuimaliev from '../public/images/works/thumbBsuimaliev.png';
import thumbOop244 from '../public/images/works/thumbOop244.jpeg';
import thumbOop345 from '../public/images/works/thumbOop345.jpeg';

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={1}>
                    <Section>
                        <WorkGridItem id="wildlife-walk" title="Web Wildlife Walk" thumbnail={thumbWildlifeWalk}>
                            A flora and fauna locating app
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="bsuimaliev" title="Bsuimaliev Portfolio" thumbnail={thumbBsuimaliev}>
                            My portfolio website
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="oop244" title="Object Oriented Programming" thumbnail={thumbOop244}>
                            All the code I have developed during my Object Oriented Programming course.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="oop345" title="Software Development Using C++" thumbnail={thumbOop345}>
                            All the code I have developed during my Software Development Using C++ course.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Works;