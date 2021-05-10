import { Box, Center, Divider, Flex } from "@chakra-ui/layout"
import { Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import * as React from "react"
import Truncate from "react-truncate"
import Card from "../components/Card"
import { Hero } from "../components/Hero"
import Seo from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const color = useColorModeValue("black", "white")
  const bshadow = useColorModeValue(
    "0 -1px 27px 0 rgb(0 0 0 / 10%), 0 4px 15px 0 rgb(0 0 0 / 20%)",
    "0 -1px 27px 0 rgb(0 0 0 / 10%), 0 4px 15px 0 rgb(0 0 0 / 20%)"
  )
  let count = 1
  let newPosts = []
  newPosts.push({ ...data.poems.edges[0], linkText: "poems" })
  newPosts.push({ ...data.reviews.edges[0], linkText: "reviews" })
  newPosts.push({ ...data.thoughts.edges[0], linkText: "thoughts" })
  console.log(newPosts)
  return (
    <>
      <Center>
        <Seo title="Home" />
        <Hero title="HELLO" />
      </Center>

      <Center mb={4} display="flex" flexDirection="column">
        <Heading as="h6">RECENT POSTS</Heading>
        <Divider color={color} w="20%" h="25px" />
      </Center>
      <SimpleGrid w="full" columns={[1, 2, 2, 3]} spacing="10" p="10">
        {newPosts.map(newPost => {
          return (
            <Flex direction="column" alignItems="center">
              <Center
                boxShadow={bshadow}
                p={2}
                m={2}
                rounded="md"
                w="100%"
                textAlign="center"
              >
                <Heading as="h3" w="full" p={2} size={"md"}>
                  Category: {newPost.linkText.toUpperCase()}
                </Heading>
              </Center>
              <Card
                key={(count += 1)}
                to={`/${newPost.linkText}/${newPost.node.slug}`}
                title={newPost.node.title}
                text={
                  <Truncate
                    lines={1}
                    width={1000} // width being how much you want to truncate your copy
                    ellipsis="&hellip;"
                  >
                    {documentToReactComponents(
                      JSON.parse(newPost.node.body.raw)
                    )}
                  </Truncate>
                }
                date={newPost.node.datePublished}
              />
            </Flex>
          )
        })}
      </SimpleGrid>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query poemsQuery {
    poems: allContentfulPoems(sort: { order: DESC, fields: datePublished }) {
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
    reviews: allContentfulReviews(
      sort: { order: DESC, fields: datePublished }
    ) {
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
    thoughts: allContentfulThoughts(
      sort: { order: DESC, fields: datePublished }
    ) {
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
`
