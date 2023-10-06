import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "../authPages/SignInScreen";
import SignUpScreen from "../authPages/SignUpScreen";
import ConfirmEmailScreen from "../authPages/ConfirmEmailScreen";
import ForgotPasswordScreen from "../authPages/ForgotPasswordScreen";
import Home from "../../screens/Home";


const Stack = createNativeStackNavigator();
const Navigation = ({setUser}) => {
    const handleLogin = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {   
            const user = userCredential.user;
            console.log(user);
            setUser(user);
                
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}
    return(
       <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={SignInScreen} />
                <Stack.Screen name="Cadastro" component={SignUpScreen} />
                <Stack.Screen name="Confirmar" component={ConfirmEmailScreen} />
                <Stack.Screen name="Esqueceu" component={ForgotPasswordScreen} />
                <Stack.Screen name='Home' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation