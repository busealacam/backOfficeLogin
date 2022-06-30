import React from "react"
import { Controller, useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./Input";

type RForm = {
    name: string,
    password: string,
    operation: "login" | "signin"
}

interface IFormType {
    formType: "login" | "signin"
}

let FormSchema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
    operation: yup.string(),
}).required();

export const RegistrationForm = ({ formType }: IFormType) => {
    const { control, handleSubmit, formState: { errors } } = useForm<RForm>({
        resolver: yupResolver(FormSchema),
        defaultValues: {
            operation: formType
        }
    })
    return (
        <ScrollView>
            <View>
                <Controller
                    control={control}
                    name="name"
                    rules={{
                        required: true,
                    }}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <Input
                            label="Nom"
                            placeholder="Name"
                            onChangeText={onChange}
                            error={!!error}
                            errorDetails={error?.message}
                            value={value}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="name"
                    rules={{
                        required: true,
                    }}
                    defaultValue=""
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <Input
                            label="Mot de passe"
                            placeholder="Password"
                            onChangeText={onChange}
                            error={!!error}
                            errorDetails={error?.message}
                            value={value}
                        />
                    )}
                />
            </View>
        </ScrollView>
    )
}