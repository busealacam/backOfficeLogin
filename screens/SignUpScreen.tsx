import React from "react";
import { Text, View } from "react-native";
import { RegistrationForm } from "../components/RegistrationForm";

export const SignUpScreen = ({ navigation }: any) => {
    return (
        <View>
            <RegistrationForm
                formType="signin"
            />
            <Text style={{ textAlign: "center", marginTop: 10 }} onPress={() => navigation.navigate("Login")}
            >Have an account ? Log in.</Text>
        </View>
    )
}