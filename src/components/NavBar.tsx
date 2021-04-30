import { HamburgerIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react"
/* import "@fontsource/raleway/400.css"
import "@fontsource/open-sans/700.css" */
import { Link as NLink } from "gatsby"
import React, { useState } from "react"
import { DarkModeSwitch } from "./DarkModeSwitch"

interface MenuToggleProps {
  toggle: () => void
  isOpen: boolean
}

const NavBarContainer = ({
  children,
  ...props
}: {
  children: JSX.Element[]
}) => {
  return (
    <Flex
      as="nav"
      align="baseline"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["transparent", "transparent", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  )
}

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
  const color = useColorModeValue("black", "white")

  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? (
        <CloseButton h="30px" w="30px" color={color} />
      ) : (
        <HamburgerIcon h="30px" w="30px" color={color} />
      )}
    </Box>
  )
}

const MenuItem = ({
  children,
  to = "/",
  ...restProps
}: {
  children: string
  to: string
}) => {
  const color = useColorModeValue("black", "white")
  return (
    <NLink to={to}>
      <Button
        fontWeight="bold"
        variant="outline"
        fontSize="xl"
        color={color}
        display="block"
        {...restProps}
      >
        {children}
      </Button>
    </NLink>
  )
}

const MenuLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={[1, 2, 8, 8]}
        align="baseline"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        pr={{ md: 5 }}
        m={1}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/thoughts">Unpolished Thoughts</MenuItem>
        <MenuItem to="/poems">Poems</MenuItem>
        <MenuItem to="/reviews">Reviews</MenuItem>
        <MenuItem to="/me">About</MenuItem>
      </Stack>
    </Box>
  )
}
const NavBar = ({ siteTitle }: { siteTitle: String }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <NavBarContainer>
      <NLink to={"/"}>
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          m={1}
          h="55px"
        >
          {siteTitle}
        </Heading>
      </NLink>
      <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      <MenuLinks isOpen={isOpen} />
      <DarkModeSwitch />
    </NavBarContainer>
  )
}

export default NavBar
