import React from "react";
import { StatusBar } from "expo-status-bar";
import { Appearance } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import { Walkthrough } from "./src/presentation/screens/Walkthrough";
import { darkTheme, lightTheme } from "./src/presentation/theme";

export default function App() {
  const colorScheme = Appearance.getColorScheme();
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
        <Walkthrough />
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
