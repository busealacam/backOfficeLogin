import React from "react";
import { Button, Text, View } from "react-native";
import { ButtonCustom } from "../components/ButtonCustom";
import { RegistrationForm } from "../components/RegistrationForm";

export const LoginScreen = ({ navigation }: any) => {
    return (
        <View>
            <RegistrationForm
                formType="login"
            />
            <Text style={{textAlign: "center", marginTop: 10}} onPress={() => navigation.navigate("Signup")}
            >Don't have an account?</Text>
        </View>
    )
}