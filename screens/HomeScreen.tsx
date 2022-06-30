import React from "react";
import {Text, View } from "react-native";
import { ButtonCustom } from "../components/ButtonCustom";

export const HomeScreen = ({ navigation }: any) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <ButtonCustom
                title="Login"
                type="login"
                onPress={() => navigation.navigate('Login')}
            />
            <ButtonCustom 
                title="Sign up"
                type="signin"
                onPress={() => navigation.navigate('Signup')}
            />
        </View>
        
    )
}