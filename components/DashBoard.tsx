import React from "react";
import { Button, ScrollView, View } from "react-native";
// import Gallery from "../src/cameraRool/Gallery";
import { ButtonCustom } from "./ButtonCustom";

import { DashBoardAddUserForm } from "./DashBoardAddUserForm";
import { DashBoardListUser } from "./DashBoardListUser";

export const DashBoard = ({navigation}: any) => {
    return (
        <View style={{flex:1}}>
            <ScrollView><DashBoardListUser/></ScrollView>
            <ButtonCustom
                title="Gallery"
                onPress={() => navigation.navigate("Gallery")}
            />
            <DashBoardAddUserForm />    
        </View>
    )
}