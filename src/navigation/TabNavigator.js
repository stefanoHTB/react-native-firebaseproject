import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";





const Tab = createBottomTabNavigator();


const TabNavigator = () => {

    return (

        <Tab.Navigator  >
            <Tab.Screen name='Home' component={HomeScreen} options={{headerShown:false}} />
            <Tab.Screen name='Messages' component={MessagesScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    )

}

export default TabNavigator;