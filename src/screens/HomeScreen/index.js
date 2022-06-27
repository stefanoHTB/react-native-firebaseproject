import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ADDPOSTSCREEN } from "../../constants/routeNames";


const HomeScreen = () => {

    const navigation = useNavigation();

    
 const PostSomething = () => {
    navigation.navigate(ADDPOSTSCREEN)
 }


    return (

<SafeAreaView>
            <ScrollView>

                <View style={{alignItems:'flex-end', padding: 10, backgroundColor:'green'}}>
                    
            <TouchableOpacity 
            onPress={PostSomething}
            style={{marginTop: 5, height: 40, borderRadius: 10, width:40, backgroundColor:'yellow'}}>
                <Image style={{height:40, width:40, borderRadius:7 }} source={require('../../assets/img/plus.png')} />
            </TouchableOpacity>

                </View>

        

        </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen;