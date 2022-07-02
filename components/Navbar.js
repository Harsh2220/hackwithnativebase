import { Avatar, Heading, HStack, Image } from "native-base";
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
      <Image src={user.photoURL} boxSize={12} rounded="full" />
    </HStack>
  );
}
