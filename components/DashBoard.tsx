import React from "react";
import { Text, View } from "react-native";
import firestore from '@react-native-firebase/firestore';
import { DashBoardForm } from "./DashBoardForm";

export const DashBoard = ({ navigation }: any) => {

    const usersCollection = firestore()
        .collection('Users')
        .get()
        .then(collectionSnapshot => {
            console.log('Total users: ', collectionSnapshot.size); collectionSnapshot
                .forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id,
                        documentSnapshot.data());
                });
        });;
    const userDocument = firestore()
        .collection('Users')
        .doc('ABC')
        // .then(docSnapshot => {
        //     if (docSnapshot.exists) {
        //         const userData = docSnapshot.data()
        //         console.log(userData)
        //     }
        // });
    // const users = await firestore().collection('Users').get();
    // const user = await firestore().collection('Users').doc('ABC').get();
    firestore()
        .collection('Users')
        .add({
            name: 'John',
            email: 'john@john.com',
            password: 'john1234'
        })
        .then(() => {
            console.log('User added!');
        });
    return (
        <View>
            <DashBoardForm />
        </View>
    )
}