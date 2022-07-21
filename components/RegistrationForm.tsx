import React, { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./Input";
import { ButtonCustom } from "./ButtonCustom";
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IFormType, NavigationTypeParamList, RForm } from "../src/types/types";
import { FormSchema } from "../src/schemas/schemas";
import { createUser, loginUser } from "../src/firebase/Auth";

export const RegistrationForm = ({ formType }: IFormType) => {
    const navigation = useNavigation<NativeStackNavigationProp<NavigationTypeParamList>>()
    const { control, handleSubmit, formState: { errors } } = useForm<RForm>({
        resolver: yupResolver(FormSchema),
        defaultValues: {
            operation: formType
        }
    });

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState({});

    // Handle user state changes
    function onAuthStateChanged(user: any,) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    const onSubmit = (data: RForm) => {

        if (formType === "signin") {
            createUser(data)
        }
        if (formType === "login") {
            loginUser(data, navigation)
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);


    if (initializing) return null;
    return (
        <ScrollView>
            <View>
                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: true,
                    }}
                    defaultValue=""
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
                    defaultValue=""
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
                <ButtonCustom
                    title={formType}
                    type={formType}
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </ScrollView>
    )
}