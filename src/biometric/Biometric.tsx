import React, { useState } from 'react';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
import { Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';

/**** Biometric Auth ****/
type FingerPrintProps = {
    handleSuccess: () => void
}

export const Biometric: React.FunctionComponent<FingerPrintProps> = ({ navigation }: any) => {
    const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true })

    rnBiometrics.isSensorAvailable()
        .then((resultObject) => {
            const { available, biometryType } = resultObject

            if (available && biometryType === BiometryTypes.TouchID) {
                console.log("TouchID is supported")
            } else if (available && biometryType === BiometryTypes.FaceID) {
                console.log("FaceID is supported")
            } else if (available && biometryType === BiometryTypes.Biometrics) {
                console.log("Biometrics is supported")
            } else {
                console.log("Biometrics not supported")
            }
        })

    let epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString()
    let payload = epochTimeSeconds + "some message"

    const fingerPrintLogin = () => {
        rnBiometrics
            .biometricKeysExist()
            .then(resultObject => {
                const { keysExist } = resultObject

                if (keysExist) {
                    rnBiometrics
                        .createSignature({
                            promptMessage: "Sign in",
                            payload: payload // A quoi ca sert ?
                        })
                        .then(resultObject => {
                            const { success, signature } = resultObject

                            if (success) {
                                console.log(signature)
                                handleSuccess()

                                // verifySignatureWithServer(signature, payload);
                            }
                        })
                        .catch(err => console.log(err))
                } else {
                    rnBiometrics
                        .createKeys()
                        .then(resultObject => {
                            const { publicKey } = resultObject
                            console.log(publicKey)

                            // sendPublicKeyToServer(publicKey)
                        })
                        .catch(err => console.log(err))
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <View style={styles.fingerPrintBtn}>
            <TouchableOpacity onPress={() => fingerPrintLogin()}>
                <Text>FingerPrint</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    fingerPrintBtn: {
        backgroundColor: "white",
        marginEnd: 5,
        marginTop: 20,
        height: 50,
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#2c3e50"
    }

})