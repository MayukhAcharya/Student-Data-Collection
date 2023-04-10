import { View, Text } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../src/RegisterScreen";
import LoginScreen from "../src/LoginScreen";
import HomeScreen from "../src/HomeScreen";
import { Authcontext } from "../api/AuthContext";
import DataScreen from "../src/DataScreen";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const { token } = useContext(Authcontext);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token !== null ? (
          <>
            <Stack.Screen name="home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
          </>
        )}
        <Stack.Screen name="datascreen" component={DataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
