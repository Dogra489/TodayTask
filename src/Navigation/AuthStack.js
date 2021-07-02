import React, { Fragment } from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup, LandingPage, MainPage } from "../Screen";
import navigationStrings from "../constants/navigationStrings";
import TabRoutes from "./TabRoutes";
import ShirtDetails from "../Screen/ShirtDetails";
import Quantity from "../Screen/Quantity/Quantity";


const Stack = createStackNavigator();

function AuthStack(Stack) {
  return (
    <Fragment>
      <Stack.Screen
        component={LandingPage}
        options={{
          headerShown: false,
        }}
        name={navigationStrings.LANDING_PAGE}
      />

      <Stack.Screen
        name={navigationStrings.LOGIN}
        options={{
          headerShown: false,
        }}
        component={Login}
      />

      <Stack.Screen
        name={navigationStrings.SIGNUP}
        options={{
          headerShown: false,
        }}
        component={Signup}
      />
      <Stack.Screen
        name={navigationStrings.SHIRTDETAILS}
        options={{
          headerShown: false,
        }}
        component={ShirtDetails}
      />
      <Stack.Screen
        name={navigationStrings.QUANTITY}
        options={{
          headerShown: false,
        }}
        component={Quantity}
      />
    </Fragment>
  );
}

export default AuthStack;
