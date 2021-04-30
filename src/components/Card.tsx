import { CalendarIcon } from "@chakra-ui/icons"
import {
  Box,
  Text,
  Heading,
  HStack,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  Container,
} from "@chakra-ui/react"
import React from "react"

const Card = ({
  to,
  title,
  text,
  date,
}: {
  title: string
  section: string
  text: string
  date: string
  to: string
}) => {
  const color = useColorModeValue("black", "white")
  const bg = useColorModeValue("#f7fafc", "#171923")
  const bshadow = useColorModeValue(
    "0 -1px 27px 0 rgb(0 0 0 / 10%), 0 4px 15px 0 rgb(0 0 0 / 20%)",
    "0 -1px 27px 0 rgb(0 0 0 / 10%), 0 4px 15px 0 rgb(0 0 0 / 20%)"
  )
  const link = to
  return (
    <LinkBox
      as="article"
      w="full"
      boxShadow={bshadow}
      p="6"
      pl={10}
      rounded="md"
      bg={bg}
      color={color}
    >
      <Heading as="h3" w="full" p={2} size={"md"}>
        <LinkOverlay href={link}>{title}</LinkOverlay>
      </Heading>
      <Container p={2}>{text}</Container>
      <HStack p={2}>
        <CalendarIcon />
        <Text>{date}</Text>
      </HStack>
    </LinkBox>
  )
}

export default Card
