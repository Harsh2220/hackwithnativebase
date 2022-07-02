import React from "react";
import { Box, Button, Heading, Image, Stack } from "native-base";

export default function FoodCard({ name, price }) {
  return (
    <Stack my="5" rounded="2xl" bg="white" flexWrap="wrap" minW={"56"}>
      <Box shadow={9} rounded="2xl">
        <Image
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          w="full"
          h="48"
          rounded="2xl"
        />
      </Box>
      <Stack p="3" maxW={"72"}>
        <Heading mt="2" fontSize={["md", "lg", "xl"]}>
          {name}
        </Heading>
        <Heading fontSize="md" color="gray.500">
          ₹{price}
        </Heading>
      </Stack>
      <Button m="3" colorScheme={"indigo"}>
        Buy Now
      </Button>
    </Stack>
  );
}
