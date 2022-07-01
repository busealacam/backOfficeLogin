import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type InputForm = {
    label?: string;
    placeholder?: string;
    value: string
    onChangeText: (value: string) => void;
    error?: boolean;
    errorDetails?: string;
    secureTextEntry?: boolean;
}

export const Input: React.FunctionComponent<InputForm> = ({
    label, placeholder, value, secureTextEntry, onChangeText, error = false, errorDetails
}) => {
    return (
        <View style={styles.container}>
            {!!label && (
                <Text style={styles.styleLabel}>{label}</Text>
            )}
            <TextInput
                style={[styles.styleInput, error ? styles.styleError : styles.styleNormal]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
            {!!errorDetails && (
                <Text style={styles.styleTextError}>{errorDetails}</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    styleLabel: {
        marginBottom: 4,
        fontSize: 14,
        fontWeight: "800"
    },
    styleInput: {
        borderWidth: 1,
        borderColor: "grey",
        color: "grey",
        borderRadius: 6,
        paddingLeft: 12,
        paddingRight: 12,
        height: 40,
        backgroundColor: "white"
    },
    styleError: {
        borderColor: "red"
    },
    styleNormal: {
        borderColor: "grey"
    },
    styleTextError: {
        marginTop: 4,
        color: "red",
        fontSize: 14,
        fontWeight: "800"
    }
})