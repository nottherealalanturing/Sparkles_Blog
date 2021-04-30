import { Center } from "@chakra-ui/layout"
import * as React from "react"
import { Hero } from "../components/Hero"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Center>
      <Seo title="Home" />
      <Hero title="HELLO" />
    </Center>
  )
}

export default IndexPage
