import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Object Oriented Programming">
        <Container>
            <Title>
                Object Oriented Programming <Badge>2021</Badge>
            </Title>
            <P>
                All the coursework during the Object Oriented Programming course at Seneca College. All the code was developed in C++.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://github.com/Benefactor131/Object-Oriented-Programming' isExternal>
                        https://github.com/Benefactor131/Object-Oriented-Programming <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                   <Meta>Stack</Meta> 
                   <span>C++</span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/oop244_01.png" alt="OOP244" />
            <WorkImage src="/images/works/oop244_02.png" alt="OOP244" />
        </Container>
    </Layout>
    )
}

export default Work;