import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Walkthrough } from "../../presentation/screens/Walkthrough";
import { Verification } from "../../presentation/screens/Verification";
import { VerificationCode } from "../../presentation/screens/VerificationCode";
import { Profile } from "../../presentation/screens/Profile";
import { Contacts } from "../../presentation/screens/Contacts";
import { Chats } from "../../presentation/screens/Chats";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Chat'>
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Contact" component={Contacts} />
        <Stack.Screen name="Chat" component={Chats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
