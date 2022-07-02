import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "native-base";
import React from "react";

export default function FoodCard() {
  return (
    <Box>
      <HStack
        px="10"
        bg="gray.800"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Stack my="5" rounded="2xl" bg="blue.500" flexWrap="wrap" minW={"56"}>
          <Image
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            w="full"
            h="48"
            rounded="2xl"
            // roundedTop='2xl'
          />
          <Stack p="3" maxW={"72"}>
            <Text mt="2" fontSize={["md", "lg", "xl"]}>
              Double cheese pizza
            </Text>
            <Heading fontSize="md">₹367</Heading>
          </Stack>
          <Button m="3" colorScheme={"indigo"}>
            Buy Now
          </Button>
        </Stack>
      </HStack>
    </Box>
  );
}
