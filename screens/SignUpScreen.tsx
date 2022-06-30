import React from "react";
import { View } from "react-native";
import { ButtonCustom } from "../components/ButtonCustom";
import { RegistrationForm } from "../components/RegistrationForm";

export const SignUpScreen = ({ navigation }: any) => {
    return (
        <View>
            <RegistrationForm
                formType="signin"
            />
            <ButtonCustom
                title="Sign In"
                type="signin"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}