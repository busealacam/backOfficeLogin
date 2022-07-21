import React from "react";
import { ScrollView, View } from "react-native";
import { DashBoardAddUserForm } from "./DashBoardAddUserForm";
import { DashBoardListUser } from "./DashBoardListUser";

export const DashBoard = () => {
    return (
        <View style={{flex:1}}>
            <ScrollView><DashBoardListUser/></ScrollView>
            <DashBoardAddUserForm />

        </View>
    )
}