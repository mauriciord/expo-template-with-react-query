import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Div } from "react-native-magnus";

import { AppRoutes } from "./app.routes";

export const Routes = () => {
  return (
    <Div bg="gray800" flex={1}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </Div>
  );
};
