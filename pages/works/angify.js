import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Angify">
        <Container>
            <Title>
                Angify <Badge>2022</Badge>
            </Title>
            <P>
                Being part of my college curriculum, this project aims to practice with fetching data from a external API, like Spotify API in this web app. The access on the website is based on tokens, so when the page is refreshed a new token is generated for each user, and all the temporary data is deleted. This way if you add some songs to your favourite list, and then you refresh the page, the list will be refreshed and blank.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://angify.netlify.app/' isExternal>
                        https://angify.netlify.app/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                   <Meta>Stack</Meta> 
                   <span>HTML, CSS, JS, Angular, NodeJS, Netlify</span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/Ang_01.png" alt="Angify" />
            <WorkImage src="/images/works/Ang_02.png" alt="Angify" />
        </Container>
    </Layout>
    )
}

export default Work;