import {StatusBar} from "expo-status-bar";
import React, { useCallback } from "react";
import {Main} from "./components/main";
import {useFonts} from "expo-font";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  });

  return (
    <>
      <StatusBar style="light" />
      <Main />
    </>
  );
}
