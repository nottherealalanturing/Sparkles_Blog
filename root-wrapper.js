import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "./src/components/layout"
import theme from "./theme"
import "@fontsource/raleway/400.css"
import "@fontsource/raleway/300.css"
import "@fontsource/raleway/600.css"
import "@fontsource/raleway/700.css"
import "@fontsource/raleway/800.css"
import "@fontsource/raleway/900.css"

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
