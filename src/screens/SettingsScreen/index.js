import React, {useContext} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigation } from "@react-navigation/native";
import { MANAGEMENTACCOUNT } from "../../constants/routeNames";



const SettingsScreen = () => {


    const navigation = useNavigation();
    const {user, logout} = useContext(AuthContext)


    
    const gotoManageAccount = () => {
       navigation.navigate(MANAGEMENTACCOUNT)
    }
   

    return (

         <SafeAreaView>
            <ScrollView>
            <Text>SETTINGS</Text>

        <View>
            <TouchableOpacity 
            onPress={gotoManageAccount}
            style={{marginTop: 5, height: 40, borderRadius: 10,  backgroundColor:'red'}}>
                <Text style={{color:'#fff', padding:10, marginLeft:10, fontWeight:'900'}}>management account</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginTop:600}}>
        <TouchableOpacity 
        onPress={()=> logout()}
            style={{marginTop: 20, backgroundColor:'green', height: 40, borderRadius: 10}}>
                <Text style={{fontWeight:'900', textAlign:'center', padding:10, color:'white'}}>logout</Text>
            </TouchableOpacity>
            <Text>{user.uid}</Text>
            </View>

        </ScrollView>
        </SafeAreaView>
    )
}

export default SettingsScreen;