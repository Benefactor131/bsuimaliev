import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Bairbnb">
        <Container>
            <Title>
                Bairbnb <Badge>2022</Badge>
            </Title>
            <P>
                This web app is featuring properties that can be browsed by types, and bestsellers. Basically, this site aims to be an Airbnb clone, containing all the functionality Airbnb has to offer. Bairbnb is a non-commercial website, that was my project at college.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://bairbnb.netlify.app/' isExternal>
                        https://bairbnb.netlify.app/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                   <Meta>Stack</Meta> 
                   <span>HTML, CSS, JS, React, Swiper, Node.JS, Express.JS, Material UI, CORS, Mongoose, Bcrypt, Netlify, Heroku</span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/Bnb_01.png" alt="Bairbnb" />
            <WorkImage src="/images/works/Bnb_02.png" alt="Bairbnb" />
        </Container>
    </Layout>
    )
}

export default Work;