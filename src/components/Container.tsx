import { Flex, useColorMode, FlexProps } from "@chakra-ui/react"
import React from "react"
import NavBar from "./NavBar"
import { DarkModeSwitch } from "./DarkModeSwitch"

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: "gray.50", dark: "#1a202c" }
  /* const bgColor = { light: 'gray.50', dark: 'gray.900' } */

  const color = { light: "black", dark: "white" }
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    >
      <NavBar />
      {props.children}
      <DarkModeSwitch />
    </Flex>
  )
}
