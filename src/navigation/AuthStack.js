import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createStackNavigator();



GoogleSignin.configure({
    webClientId: "451881826605-barqeii9g5v9s8v2c73d8fm7v8dbrvvn.apps.googleusercontent.com",
  });


const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown: false}} />
        </Stack.Navigator>

    )
}

export default AuthStack;