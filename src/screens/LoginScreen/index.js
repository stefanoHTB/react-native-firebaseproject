import React, {useContext, useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../../context/AuthProvider';


const LoginScreen = () => {


 const navigation = useNavigation();
 const [email, setEmail] = useState();
 const [password, setPassword] = useState();

 const {login, googlelogin} = useContext(AuthContext)



 const gotoRegister = () => {
    navigation.navigate('Register')
 }

    return (

        <SafeAreaView>
            <ScrollView>


 
        <View >
            <Text style={{fontSize: 60, padding:30, marginTop: 30, marginLeft:80, fontWeight:'900'}}>LOGIN</Text>
        </View>

        <View style={{marginTop: 50, padding: 20}}>
            <TextInput 
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholder="email" style={{backgroundColor: '#ccc', marginBottom: 10, borderRadius: 5}}/>

            <TextInput 
            
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholder="password" style={{backgroundColor: '#ccc', borderRadius: 5 }} secureTextEntry={true}/>

            <TouchableOpacity
            onPress={()=> login(email, password)} 
            style={{marginTop: 20, backgroundColor:'blue', height: 40, borderRadius: 10}}>
                <Text style={{fontWeight:'900', textAlign:'center', padding:10, color:'white'}}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> googlelogin()} 
            style={{marginTop: 20, backgroundColor:'red', height: 40, borderRadius: 10}}>
                <Text style={{fontWeight:'900', textAlign:'center', padding:10, color:'white'}}>Sign in with Google</Text>
            </TouchableOpacity>


            <TouchableOpacity 
            onPress={gotoRegister}
            style={{marginTop: 20, backgroundColor:'blue', height: 40, borderRadius: 10, width:120}}>
                <Text style={{fontWeight:'900', textAlign:'center', padding:10, color:'white'}}>go to register</Text>
            </TouchableOpacity>

        </View>

        </ScrollView>

        </SafeAreaView>

    )
}

export default LoginScreen;