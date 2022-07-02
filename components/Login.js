import { Button, Center, Stack } from "native-base";
import React from "react";

export default function Login() {
  return (
    <Center minH="100vh" bg="gray.900">
      <Stack space="8">
        <Button colorScheme="indigo" size="lg">
          Login as Owner
        </Button>
        <Button colorScheme="indigo" size="lg">
          Login as Customer
        </Button>
      </Stack>
    </Center>
  );
}
