import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Walkthrough } from "../../presentation/screens/Walkthrough";
import { Verification } from "../../presentation/screens/Verification";
import { VerificationCode } from "../../presentation/screens/VerificationCode";
import { Profile } from "../../presentation/screens/Profile";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
