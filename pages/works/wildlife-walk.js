import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Wildlife Walk">
        <Container>
            <Title>
                Wildlife Walk <Badge>2021</Badge>
            </Title>
            <P>
            This website is designed to locate and show species of animals and plants on the map utilizing iNaturalist database. It gives an option for adding observations of new species and add it to the map, and furthermore, this web application can sort out the list of animals and plants as well as classify them by four groups: native, introduced, threatened and endangered.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href='https://web-wildlife-walk.netlify.app/' isExternal>
                        https://web-wildlife-walk.netlify.app/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                   <Meta>Stack</Meta> 
                   <span>HTML, CSS, JS, NodeJS, Netlify.app</span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/WLW_01.png" alt="Wildlife-Walk" />
            <WorkImage src="/images/works/WLW_02.png" alt="Wildlife-Walk" />
        </Container>
    </Layout>
    )
}

export default Work;