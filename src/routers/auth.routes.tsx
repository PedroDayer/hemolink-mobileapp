import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";
import { ParametrosRotasAuth } from "./navigation";

const AuthStack = createNativeStackNavigator<ParametrosRotasAuth>();

export const AuthRoutes = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Cadastro" component={Cadastro} />
    </AuthStack.Navigator>
  );
};