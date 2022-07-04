import React, { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form";
import { Alert, ScrollView, Text, View } from "react-native";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./Input";
import { ButtonCustom } from "./ButtonCustom";
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationTypeParamList } from "../App";

type RForm = {
    email: string,
    password: string,
    operation: "login" | "signin" | "loggedin"
}

interface IFormType {
    formType: "login" | "signin" | "loggedin"
}

let FormSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Veuillez saisir un e-mail"),
    password: yup.string().min(8).max(32).required("Veuillez saisir un mot de passe"),
    operation: yup.string(),
}).required();


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

    const createUser = (data: RForm) => {
        auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(() => {
                Alert.alert('User account created & signed in!');
                // if (!auth.)
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            })
    }

    const loginUser = (data: RForm) => {
        auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then(() => {
                Alert.alert('Logged in');
                navigation.navigate("Home", { ...data })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            })
    }


    const onSubmit = (data: RForm) => {

        if (formType === "signin") {
            createUser(data)
        }
        if (formType === "login") {
            loginUser(data)
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