import { collection, doc, getDocs } from "firebase/firestore/lite";
import { Box, Heading, HStack } from "native-base";
import React, { useEffect, useState } from "react";
import db from "../FirebaseConfig";
import RestaurantCard from "./RestaurantCard";

export default function Restaurant() {
  const [RestaurantData, setRestaurantData] = useState("");

  const getData = async () => {
    const ResCol = collection(db, "owners");
    const ResSnapshot = await getDocs(ResCol);
    const ResList = ResSnapshot.docs.map((doc) => doc.data());
    setRestaurantData(ResList);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box bg="amber.400" minH="100vh">
      <Heading p="10">Find all restaurant</Heading>
      <HStack px="10" flexWrap="wrap" space={10}>
        {RestaurantData &&
          RestaurantData.map((el) => (
            <RestaurantCard
              address={el.Address}
              restaurantName={el.RestaurantName}
              url={el.Image}
            />
          ))}
      </HStack>
    </Box>
  );
}
