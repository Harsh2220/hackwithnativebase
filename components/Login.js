import React from "react";
import { Button, Center, Stack } from "native-base";
import { useStatevalue } from "./StateProvider";
import { auth, provider } from "../FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { actionTypes } from "./Reducer";

export default function Login() {
  const [state, dispatch] = useStatevalue();

  const sendData = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Center minH="100vh" bg="gray.900">
      <Stack space="8">
        <Button colorScheme="indigo" size="lg" onPress={sendData}>
          Login as Owner
        </Button>
        <Button colorScheme="indigo" size="lg">
          Login as Customer
        </Button>
      </Stack>
    </Center>
  );
}
