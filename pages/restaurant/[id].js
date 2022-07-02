import React from "react";
import { useRouter } from "next/dist/client/router";
import Food from "../../components/Food";

export default function ResId() {
  const router = useRouter();
  const { id } = router.query;

  console.log(id, "afnk");
  return <Food proid={id} />;
}
