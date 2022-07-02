import { Avatar, Heading, HStack } from "native-base";
import React from "react";
import { useStatevalue } from "./StateProvider";

export default function Navbar() {
  const [{ user }, dispatch] = useStatevalue("");

  return (
    <HStack
      h="16"
      justifyContent="space-between"
      alignItems="center"
      bg="blue.500"
      px="10"
    >
      <Heading>Food</Heading>
      <Avatar
        bg="green.500"
        source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      >
        AJ
      </Avatar>
    </HStack>
  );
}
