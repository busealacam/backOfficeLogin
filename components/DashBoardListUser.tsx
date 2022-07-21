import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import firestore from '@react-native-firebase/firestore';
import { DashForm } from "../src/types/types";
import auth from '@react-native-firebase/auth';
import { editItem } from "../src/firebase/Auth";
import { useNavigation } from "@react-navigation/native";

export const DashBoardListUser = (): JSX.Element => {
    const navigation = useNavigation()
    const userAuth = auth().currentUser;
    const [loading, setLoading] = useState<boolean>(false); // Set loading to true on component mount
    const [countData, setCountData] = useState<number>(0);
    const [data, setData] = useState<any>();
    function onResult(querySnapshot: any) {
        console.log('KeychainScreen: Récupération de la collection des users');

        let items: DashForm[] = [];
        querySnapshot.forEach((snapshot: any) => {
            console.log("KeychainScreen: ID=" + snapshot.id);
            let id = { 'id:': snapshot.id }
            let item = snapshot.data();
            item.id = snapshot.id;
            items.push(item);
        });

        console.log("KeychainScreen: onResult()");
        console.log(items);
        setCountData(items.length);
        setData(items);
    }

    function onError(error: any) {
        console.error(error);
    }

    useEffect(() => {
        console.log("KeychainScreen: utilisateur = " + userAuth?.uid);
        // Listener sur les modifications de la requête. Il surveille la collection "Trousseau"
        // lorsque les documents sont modifiés (suppression, ajout, modification)
        // Donc si j'ajoute un champ dans Firebase, en web, l'app mobile affichera en temps réel
        // la nouvelle ligne, sans refresh manuel !
        console.log("KeychainScreen: useEffect()");
        if (userAuth) {
            firestore()
                .collection('Users')
                .doc(userAuth.uid)
                .collection('App')
                .onSnapshot(onResult, onError);
        }
    }, [])

    if (loading) {
        return <ActivityIndicator />;
    }

    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity onPress={() => editItem(item,navigation) }>
                <View key={item.email}>
                    <Text style={styles.listUser}> ✏️ {item.name}</Text>
                </View>
            </TouchableOpacity>

        )
    }

    return (
        <ScrollView>
            <View>
                <Text style={{ fontSize: 25, margin: 5, color: "#ffc107" }}>List User</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                />
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    listUser: {
        fontSize: 20,
        height: 50,
        borderWidth: 1,
        margin: 5,
        padding: 5,
        borderColor: "#ffc107",
        textAlignVertical: "center",
        color: "black"
    }
})