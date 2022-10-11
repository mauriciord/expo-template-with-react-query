import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "@screens/MainScreen";
import { GifDetailsScreen } from "@screens/GifDetailsScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={MainScreen} />
    <Screen name="Details" component={GifDetailsScreen} />
  </Navigator>
);
