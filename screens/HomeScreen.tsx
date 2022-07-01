import React from "react";
import {Text, View } from "react-native";
import { ButtonCustom } from "../components/ButtonCustom";
import auth from '@react-native-firebase/auth';

export const HomeScreen = ({ navigation, route }: any,) => {
    const user = route.params
    console.log("user",user.data)
    function SignOutUser() {
        auth()
            .signOut()
            .then (() => {navigation.navigate("Login")});
    }
    return (
        <View>
            <Text>Home Screen</Text> 
            {/* <Text>Welcome {user}</Text> */}
            <ButtonCustom
                title="Log out"
                type={"loggedin"}
                onPress={SignOutUser}
            />
        </View>
        
    )
}