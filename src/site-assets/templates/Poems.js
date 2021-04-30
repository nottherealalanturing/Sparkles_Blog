import { CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { Box, HStack } from '@chakra-ui/layout';
import { Center, Container, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react';
import  { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Seo from '../../components/seo'



export const query = graphql`
    query($slug: String!) {
        contentfulPoems(slug: {eq: $slug} ) {
            title
            datePublished(formatString: "Do MMMM, YYYY")
            author
            body {
                raw
            }
        }
    }
`
const Poems = (props) => {
  const bg = useColorModeValue('#f7fafc', '#171923');
    return (
        <>
        <Seo title={props.data.contentfulPoems.title}/>
        <Center boxShadow="lg" p="4" rounded="md" mb={4} bg={bg} flexDirection='column'>
            <Heading p={2}>{props.data.contentfulPoems.title}</Heading>
            <HStack>
            <EditIcon /> <Text>{props.data.contentfulPoems.author}</Text>    
            </HStack>
            <HStack>
            <CalendarIcon /> <Text>{props.data.contentfulPoems.datePublished}</Text>    
            </HStack>
            
        </Center>
        <Box w={'100%'} boxShadow="lg" p="6" rounded="md" mb={4} bg={bg}>
          <Container w={'full'} maxW={'100%'} >
              {documentToReactComponents(JSON.parse((props.data.contentfulPoems.body.raw)))}
        </Container>
          </Box>
        </>
    )
}

export default Poems;