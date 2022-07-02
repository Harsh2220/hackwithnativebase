import React from "react";
import "../styles/globals.css";
import { NativeBaseProvider } from "native-base";
import { StateProvider } from "../components/StateProvider";
import Reducer, { initialstate } from "../components/Reducer";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialstate={initialstate} reducer={Reducer}>
      <NativeBaseProvider>
        <Component {...pageProps} />
      </NativeBaseProvider>
    </StateProvider>
  );
}

export default MyApp;
