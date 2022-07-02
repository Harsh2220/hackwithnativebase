import { Image } from "native-base";
import React from "react";
import FoodCard from "../components/FoodCard";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Restaurant from "../components/Restaurant";
import { useStatevalue } from "../components/StateProvider";

export default function App() {
  const [{ user }, dispatch] = useStatevalue("");
  return <>{!user ? <Login /> : <Restaurant />}</>;
}
