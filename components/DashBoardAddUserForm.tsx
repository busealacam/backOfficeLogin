import React, { useState } from "react";
import * as yup from 'yup';
import { Controller, useForm } from "react-hook-form";
import { Alert, ScrollView, Switch, View, Text } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./Input";
import { ButtonCustom } from "./ButtonCustom";
import { DashForm } from "../src/types/types";
import { DashFormSchema } from "../src/schemas/schemas";
import { addNewUser } from "../src/firebase/Auth";
import CheckBox from "@react-native-community/checkbox";


export const DashBoardAddUserForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<DashForm>({
        resolver: yupResolver(DashFormSchema),
    });

    const [isSelectedWeb, setSelectionWeb] = useState(false);
    const [isSelectedMobile, setSelectionMobile] = useState(false);
    const validation = (data: DashForm) => {
        addNewUser(data)
    }
    return (
        <View>
            <Controller
                control={control}
                name="name"
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Input
                        label="Name"
                        placeholder="Name"
                        onChangeText={onChange}
                        error={!!error}
                        errorDetails={error?.message}
                        value={value}
                        secureTextEntry={false}
                    />
                )}
            />
            <Controller
                control={control}
                name="email"
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Input
                        label="Email"
                        placeholder="Email"
                        onChangeText={onChange}
                        error={!!error}
                        errorDetails={error?.message}
                        value={value}
                        secureTextEntry={false}
                    />
                )}
            />
            <Controller
                control={control}
                name="password"
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Input
                        label="Password"
                        placeholder="Password"
                        onChangeText={onChange}
                        error={!!error}
                        errorDetails={error?.message}
                        value={value}
                        secureTextEntry={true}
                    />
                )}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 10 }}>
                <View style={{ alignSelf: "center", flexDirection: "row" }}>
                    <CheckBox
                        value={isSelectedWeb}
                        onValueChange={setSelectionWeb}
                        style={{ alignSelf: "center" }}
                    />
                    <Text style={{ margin: 8 }}>Web</Text>
                </View>
                <View style={{ alignSelf: "center", flexDirection: "row" }}>
                    <CheckBox
                        value={isSelectedMobile}
                        onValueChange={setSelectionMobile}
                        style={{ alignSelf: "center" }}
                    />
                    <Text style={{ margin: 8 }}>Mobile</Text>
                </View>
            </View>
            <ButtonCustom
                onPress={handleSubmit(validation)}
                title="Add"
            />
        </View>
    )
}