import { CalendarIcon, EditIcon } from "@chakra-ui/icons"
import { Container, HStack } from "@chakra-ui/layout"
import { Center, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import React from "react"
import Seo from "../../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulPoems(slug: { eq: $slug }) {
      title
      datePublished(formatString: "Do MMMM, YYYY")
      author
      body {
        raw
      }
    }
  }
`
const Poems = props => {
  const bg = useColorModeValue("#f7fafc", "#171923")
  const options = {
    renderText: text => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    },
  }
  return (
    <>
      <Seo title={props.data.contentfulPoems.title} />
      <Center
        boxShadow="lg"
        p="4"
        rounded="md"
        mb={4}
        bg={bg}
        flexDirection="column"
      >
        <Heading p={2}>{props.data.contentfulPoems.title}</Heading>
        <HStack>
          <EditIcon /> <Text>{props.data.contentfulPoems.author}</Text>
        </HStack>
        <HStack>
          <CalendarIcon />{" "}
          <Text>{props.data.contentfulPoems.datePublished}</Text>
        </HStack>
      </Center>
      <Center w={"full"} boxShadow="lg" p="6" rounded="md" mb={4} bg={bg}>
        <Container maxW={"100%"} display="flex" flexDirection="column">
          {documentToReactComponents(
            JSON.parse(props.data.contentfulPoems.body.raw),
            options
          )}
        </Container>
      </Center>
    </>
  )
}

export default Poems
