import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "./src/components/layout"

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
