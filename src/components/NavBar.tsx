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
      align="center"
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
        fontWeight="700"
        variant="outline"
        fontSize="md"
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
        spacing={[1, 1, 1, 1]}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
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
    <Box m="0 auto" maxWidth="960px" padding={"0 1.0875rem 1.45rem"} mt={4}>
      <NavBarContainer>
        <NLink to={"/"}>
          <Heading
            as="h1"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            m={1}
            fontSize={["2xl", "2xl", "xd", "2xl"]}
          >
            {siteTitle}
          </Heading>
        </NLink>
        <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        <MenuLinks isOpen={isOpen} />
        <DarkModeSwitch />
      </NavBarContainer>
    </Box>
  )
}

export default NavBar
