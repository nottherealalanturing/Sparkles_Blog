import { Center, Divider } from "@chakra-ui/layout"
import { Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Card from "../components/Card"
import Truncate from "react-truncate"
import Seo from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Poems = () => {
  const color = useColorModeValue("black", "white")
  const data = useStaticQuery(graphql`
    query {
      allContentfulPoems(sort: { fields: datePublished, order: DESC }) {
        edges {
          node {
            title
            slug
            datePublished(formatString: "Do MMMM, YYYY")
            body {
              raw
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <Seo title="Poems" />

      <Center mb={4} display="flex" flexDirection="column">
        <Heading>Poems</Heading>
        <Divider color={color} w="20%" h="25px" />
      </Center>
      <SimpleGrid w="full" columns={[1, 2, 2, 3]} spacing="10" p="10">
        {data.allContentfulPoems.edges.map(edge => {
          console.log(edge)
          return (
            <Card
              to={`/poems/${edge.node.slug}`}
              title={edge.node.title}
              text={
                <Truncate
                  lines={1}
                  width={1000} // width being how much you want to truncate your copy
                  ellipsis="&hellip;"
                >
                  {documentToReactComponents(JSON.parse(edge.node.body.raw))}
                </Truncate>
              }
              date={edge.node.datePublished}
            />
          )
        })}
      </SimpleGrid>
    </>
  )
}

export default Poems
