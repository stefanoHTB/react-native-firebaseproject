import React, {useContext} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigation } from "@react-navigation/native";


const ManagementAccountScreen = () => {


    const navigation = useNavigation();


    
    const PostSomething = () => {
       navigation.navigate(ADDPOSTSCREEN)
    }
   

    return (

         <SafeAreaView>
            <ScrollView>
            <Text>Manage yout Account</Text>

        <View>
            <TouchableOpacity 
            onPress={PostSomething}
            style={{marginTop: 5, height: 40, borderRadius: 10,  backgroundColor:'yellow'}}>
                <Text style={{color:'#fff', padding:10, marginLeft:10, fontWeight:'900'}}>Change your email</Text>
            </TouchableOpacity>
        </View>
      

        </ScrollView>
        </SafeAreaView>
    )
}

export default ManagementAccountScreen;