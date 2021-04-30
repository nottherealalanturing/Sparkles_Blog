import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "./src/components/layout"
import theme from "./theme"

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
