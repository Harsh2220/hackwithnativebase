import { Box, HStack } from "native-base";
import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { collection, getDocs } from "firebase/firestore/lite";
import db from "../FirebaseConfig";

export default function Food({ proid }) {
  const [ProductData, setProductData] = useState("");
  const getProducts = async (id) => {
    const ProCol = collection(db, `owners/${id}/Products`);
    const ProSnapshot = await getDocs(ProCol);
    const ProList = ProSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setProductData(ProList);
    console.log(ProList);
  };

  useEffect(() => {
    getProducts(proid);
  }, []);

  return (
    <Box bg="blue.100" minH={"100vh"}>
      <HStack px="10" justifyContent="space-between" flexWrap="wrap">
        {ProductData &&
          ProductData.map((el) => (
            <FoodCard key={el.id} name={el.ProductName} price={el.Price} />
          ))}
      </HStack>
    </Box>
  );
}
