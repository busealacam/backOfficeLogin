import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonCustom } from "../components/ButtonCustom";
import { SignOutUser } from "../src/firebase/Auth";


export const HomeScreen = ({ navigation, route }: any): JSX.Element => {
    
    return (
        <View style={styles.container}>
            <View style={styles.homeNav}>
                <ButtonCustom
                    title="Dashboard"
                    type={"loggedin"}
                    onPress={() => navigation.navigate("Admin")}
                />
                <ButtonCustom
                    title="Log out"
                    type={"loggedin"}
                    onPress={() => SignOutUser(navigation)}
                />
            </View>
            <Text style={styles.homeText} >Welcome {route.params.email}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    homeText: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    homeNav: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
})