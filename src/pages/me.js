import { Box } from "@chakra-ui/layout"
import { Center, Container } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Seo from "../components/seo"

const BioImage = () => {
  return (
    <StaticImage
      src="../images/books.jpg"
      alt="Books"
      loading="eager"
      layout={"constrained"}
      placeholder={"blurred"}
    />
  )
}

const Me = () => {
  return (
    <>
      <Seo title="About" />

      <Box>
        <Center display="flex" flexDirection="column">
          <BioImage />
          <Container mt={10}>
            '...'
          </Container>
        </Center>
      </Box>

      <Box
        position="absolute"
        right="3px"
        bottom="0"
        fontSize={[6, 8, 10]}
        pt={10}
      >
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.twitter.com/assadeesaa">{`Nottherealalanturing`}</a>
        </footer>
      </Box>
    </>
  )
}

export default Me
