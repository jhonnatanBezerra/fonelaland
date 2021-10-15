import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "../Screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();


export const AuthRoutes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}

