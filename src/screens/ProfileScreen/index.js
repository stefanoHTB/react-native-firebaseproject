import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { SETTINGSSCREEN } from "../../constants/routeNames";


const ProfileScreen = () => {


    const navigation = useNavigation();

    
    const gotoSettings = () => {
       navigation.navigate(SETTINGSSCREEN)
    }
   

    return (

         <SafeAreaView>
            <ScrollView>
            <Text>profile</Text>

        <View style={{marginLeft:300}}>
            <TouchableOpacity 
            onPress={gotoSettings}
            style={{marginTop: 5, height: 40, borderRadius: 10, width:95, backgroundColor:'blue'}}>
                <Text style={{color:'#fff', padding:10, marginLeft:10, fontWeight:'900'}}>Settings</Text>
            </TouchableOpacity>
        </View>

        </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen;