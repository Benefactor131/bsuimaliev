import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Bsuimaliev">
        <Container>
            <Title>
                Bsuimaliev <Badge>2021</Badge>
            </Title>
            <P>
                A portfolio website containing info about me, my works, and my contacts.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://bsuimaliev.herokuapp.com/' isExternal>
                    https://bsuimaliev.herokuapp.com/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                   <Meta>Stack</Meta> 
                   <span>JS, NodeJS, Three.js, Next.js, Chakra UI, Framer Motion</span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/bsuimaliev_01.png" alt="Bsuimaliev" />
            <WorkImage src="/images/works/bsuimaliev_02.png" alt="Bsuimaliev" />
        </Container>
    </Layout>
    )
}

export default Work;