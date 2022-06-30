import React from "react";
import { Text, View } from "react-native";
import { ButtonCustom } from "../components/ButtonCustom";
import { RegistrationForm } from "../components/RegistrationForm";

export const LoginScreen = ({ navigation }: any) => {
    return (
        <View>
            <RegistrationForm
                formType="login"
            />
            <ButtonCustom
                title="Login"
                type="login"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}