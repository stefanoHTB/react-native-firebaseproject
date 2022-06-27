import React, {useContext, useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../../context/AuthProvider';





const RegisterScreen = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {register} = useContext(AuthContext)


    const gotoLogin = () => {
        navigation.navigate('Login')
     }


    return (

        <SafeAreaView>
            <ScrollView>
        <View >
            <Text style={{fontSize: 60, padding:30, marginTop: 30, marginLeft:65, fontWeight:'900'}}>Register</Text>
        </View>

        <View style={{marginTop: 50, padding: 20}}>
            <TextInput 

            onChangeText={(userEmail) => setEmail(userEmail)}
            
            placeholder="email" style={{backgroundColor: '#ccc', marginBottom: 10, borderRadius: 5}}/>
      
            <TextInput
            
            onChangeText={(userPassword) => setPassword(userPassword)}
            
            placeholder="password" style={{backgroundColor: '#ccc', borderRadius: 5 }} secureTextEntry={true}/>

            <TouchableOpacity 
            onPress={()=> register(email, password)}
            style={{marginTop: 20, backgroundColor:'#AD40AF', height: 40, borderRadius: 10}}>
                <Text style={{fontWeight:'900', textAlign:'center', padding:10, color:'white'}}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={gotoLogin}
            style={{marginTop: 20, backgroundColor:'blue', height: 40, borderRadius: 10}}>
                <Text style={{fontWeight:'900', textAlign:'center', padding:10, color:'white'}}>go to register</Text>
            </TouchableOpacity>


        </View>

        </ScrollView>

        </SafeAreaView>

    )
}

export default RegisterScreen;