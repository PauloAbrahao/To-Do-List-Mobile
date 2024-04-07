import {StatusBar} from "expo-status-bar";
import React, { useCallback } from "react";
import {Main} from "./components/main";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { TaskProvider } from "./context";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <TaskProvider>
        <StatusBar style="light" />
        <Main handleOnLayout={handleOnLayout} />
      </TaskProvider>
    </>
  );
}
