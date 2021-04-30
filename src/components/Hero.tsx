import { Flex, Heading } from "@chakra-ui/react"
import React from "react"

export const Hero = ({
  title,
  fontSize,
}: {
  title: string
  fontSize: string
}) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    /* height="100vh" */
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
    p={20}
    /* pb={40} */
  >
    <Heading fontSize={fontSize}>{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: "with-chakra-ui-typescript",
  fontSize: "6vw",
}
