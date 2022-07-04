import React, { useState } from "react";
import * as yup from 'yup';
import { Controller, useForm } from "react-hook-form";
import { ScrollView, Switch, Text, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./Input";

type DashForm = {
    name: string,
    email: string,
    password: string,
    type: "mobile" | "web",
}

let DashFormSchema = yup.object().shape({
    name: yup.string().required("Veuillez saisir un prénom"),
    email: yup.string().email("Invalid email format").required("Veuillez saisir un e-mail"),
    password: yup.string().min(8).max(32).required("Veuillez saisir un mot de passe"),
    type: yup.string(),
})

export const DashBoardForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<DashForm>({
        resolver: yupResolver(DashFormSchema),
    });
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <ScrollView>
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
                            secureTextEntry={false}
                        />
                    )}
                />
                {/* <View>
                    <Text>Switch</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#7bf54b" }}
                        thumbColor={isEnabled ? "#7bf54b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}

                    />
                </View> */}
            </View>
        </ScrollView>
    )
}