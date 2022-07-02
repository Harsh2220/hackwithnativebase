import React from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "native-base";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function RestaurantCard({ id, address, restaurantName, url }) {
  return (
    <Flex my="5" rounded="2xl" bg="blue.300" flexWrap="wrap" shadow={9}>
      <Box rounded="2xl" shadow={9}>
        <Image src={url} w="full" h="48" rounded="2xl" alt="RestaurantImage" />
      </Box>
      <Stack p="6" maxW={"72"}>
        <Link href={`/restaurant/${id}`}>
          <HStack alignItems="center" space="2">
            <Heading fontSize={["md", "lg", "xl"]}>{restaurantName}</Heading>
            <BsBoxArrowUpRight />
          </HStack>
        </Link>
        <Link
          href="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          textDecorationLine={"underline"}
        >
          <Text mt="5" fontSize="sm">
            {address}
          </Text>
        </Link>
      </Stack>
    </Flex>
  );
}
