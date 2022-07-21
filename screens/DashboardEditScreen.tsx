import React from 'react';
import { Text, View } from 'react-native';

export const DashBoardEditScreen = ({ route }: any) => {
    const item  = route.params
    console.log("edit item", route.params)
    return (
        <View>
            <Text>Edit</Text>
        </View>
    )
}