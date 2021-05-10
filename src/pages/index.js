import { Center } from "@chakra-ui/layout"
import * as React from "react"
import { Hero } from "../components/Hero"
import RecentPosts from "../components/Recent"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <>
      <Center>
        <Seo title="Home" />
        <Hero title="HELLO" />
      </Center>
      <RecentPosts />
    </>
  )
}
export default IndexPage
