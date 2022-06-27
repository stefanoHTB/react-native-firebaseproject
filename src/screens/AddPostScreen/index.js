import React from "react";
import { View, Text} from "react-native";
import { ScrollView, TextInput} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


const AddPostScreen = () => {

    

    return (

         <SafeAreaView>
            <ScrollView>
        <View >
            <Text>POST</Text>
            <View style={{ backgroundColor:'yellow'}}>
               <TextInput
                placeholder="what are u thinking........?"
                multiline
                numberOfLines={4}
                />
            </View>
        </View>

        
        </ScrollView>
        </SafeAreaView>
    )
}

export default AddPostScreen;