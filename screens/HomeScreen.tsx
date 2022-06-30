import React from "react";
import { Button, Text, View } from "react-native";
import { ButtonCustom } from "../components/ButtonCustom";
import { RegistrationForm } from "../components/RegistrationForm";

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