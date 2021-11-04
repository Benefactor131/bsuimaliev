import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Software Development Using C++">
        <Container>
            <Title>
                Software Development Using C++ <Badge>2021</Badge>
            </Title>
            <P>
                All the coursework during the Software Development Using C++ course at Seneca College.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://github.com/Benefactor131/Software-Development-Using-C' isExternal>
                        https://github.com/Benefactor131/Software-Development-Using-C <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                   <Meta>Stack</Meta> 
                   <span>C++</span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/oop345_01.png" alt="OOP345" />
            <WorkImage src="/images/works/oop345_02.png" alt="OOP345" />
        </Container>
    </Layout>
    )
}

export default Work;