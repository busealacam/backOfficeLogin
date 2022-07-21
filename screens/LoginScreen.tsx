import React from "react";
import { Button, Text, View } from "react-native";
import { ButtonCustom } from "../components/ButtonCustom";
import { RegistrationForm } from "../components/RegistrationForm";
import { Biometric } from "../src/biometric/Biometric";

export const LoginScreen = ({ navigation }: any) => {

    return (
        <View>
            <RegistrationForm
                formType="login"
            />
            <Button
                title="finger print"
                onPress={Biometric}
            />
            <Text style={{ textAlign: "center", marginTop: 10 }} onPress={() => navigation.navigate("Signup")}
            >Don't have an account ? Sign In</Text>
        </View>
    )
}