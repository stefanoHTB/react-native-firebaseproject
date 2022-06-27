import React from "react";
import { View, Text} from "react-native";
import { ScrollView} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


const MessagesScreen = () => {


    return (

         <SafeAreaView>
            <ScrollView>
        <View >
            <Text>Messages</Text>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default MessagesScreen;