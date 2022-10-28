import React from "react";
import { StatusBar } from "expo-status-bar";
import { Appearance } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "../presentation/theme";
import { Routes } from "./routes";

export default function App() {
  const colorScheme = Appearance.getColorScheme();
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
        <Routes />
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
