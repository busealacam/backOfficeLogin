import CheckBox from "@react-native-community/checkbox"
import React from "react"
import { Text, View } from "react-native";

type CheckboxType = {
    label?: string;
    value?: boolean;
    onChange: (value: boolean) => void;
}

export const CheckboxReact: React.FunctionComponent<CheckboxType> = ({ label, value, onChange }) => {
    return (
        <View>
            {!!label && (
                <Text>{label}</Text>
            )}
            <CheckBox
                value={value}
                onValueChange={onChange}
            />
        </View>

    )
}