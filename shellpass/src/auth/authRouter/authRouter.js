import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "../authScreen/SignInScreen";
import SignUpScreen from "../authScreen/SignUpScreen";
import Home from "../../screens/Home";
import ConfirmEmailScreen from "../authScreen/ConfirmEmailScreen";
import ForgotPasswordScreen from "../authScreen/ForgotPasswordScreen";


const Stack = createNativeStackNavigator();
export default function AuthRouter() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={SignInScreen} />
                <Stack.Screen name="Cadastro" component={SignUpScreen} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Confirmar" component={ConfirmEmailScreen} />
                <Stack.Screen name="Esqueceu" component={ForgotPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}