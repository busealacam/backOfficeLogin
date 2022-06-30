import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";


type IButton = {
    title: string;
    onPress: () => void
    type: "login" | "signin"
}

export const ButtonCustom = ({ title, onPress, type }: IButton) => {
    return (
        <Pressable
            style={[styles.buttonStyle, type === "login" ? styles.login : styles.signin]}
            onPress={onPress}>
            <Text style={styles.textStyle}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 100,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "red",
        height: 40,
        borderRadius: 3,
        justifyContent: "center",
        alignSelf: "center",
    },
    textStyle: {
        textAlign: "center",
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    login: {
        backgroundColor: "#17a2b8",
        borderColor: "#17a2b8",
    },
    signin: {
        backgroundColor: "#ffc107",
        borderColor: "#ffc107",
    }
})