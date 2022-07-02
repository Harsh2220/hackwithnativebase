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
import React from "react";

export default function Restaurant() {
  return (
    <Box>
      {/* <Heading p="10">Restaurant you want to order</Heading> */}
      <HStack
        px="10"
        bg="gray.800"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Flex my="5" rounded="2xl" bg="blue.500" flexWrap="wrap">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            w="full"
            h="48"
            rounded="2xl"
            // roundedTop='2xl'
          />
          <Stack p="6" maxW={"72"}>
            <Heading fontSize={["md", "lg", "xl"]}>Honest Restaurant</Heading>
            <Link
              href="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              textDecorationLine={"underline"}
            >
              <Text mt="5" fontSize="sm">
                E 1/94, Opp: Phoenix Market, Whitefield Main Rd, Mahadevapura
                Layout, RHB Colony, Mahadevapura, Bengaluru, Karnataka 560048
              </Text>
            </Link>
          </Stack>
        </Flex>
      </HStack>
    </Box>
  );
}
