import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AddPostScreen from "../screens/AddPostScreen";
import { HOME } from "../constants/routeNames";
import { ADDPOSTSCREEN } from "../constants/routeNames";
import TabNavigator from "./TabNavigator"; 
import { TABNAVIGATOR } from "../constants/routeNames";
import SettingsScreen from "../screens/SettingsScreen";
import { SETTINGSSCREEN, MANAGEMENTACCOUNT } from "../constants/routeNames";
import ManagementAccountScreen from "../settingsscreens/ManagementAccountScreen";



const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={TABNAVIGATOR} component={TabNavigator} options={{headerShown:false}}/>
            <Stack.Screen name={ADDPOSTSCREEN} component={AddPostScreen} />
            <Stack.Screen name={SETTINGSSCREEN} component={SettingsScreen}/>

            <Stack.Screen name={MANAGEMENTACCOUNT} component={ManagementAccountScreen}/>



        </Stack.Navigator>

    )
}

export default AppStack;