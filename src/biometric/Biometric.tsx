import React, { useState } from 'react';
import ReactNativeBiometrics from 'react-native-biometrics'
import { Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

/**** Biometric Auth ****/
const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true })
// const [mmkvEmail, setMmkvEmail] = useState<string>()
// const [mmkvPassword, setMmkvPassword] = useState<string>()
export const Biometric = ({ navigation }: any) => {
    rnBiometrics
        .biometricKeysExist()
        .then(resultObject => {
            const { keysExist } = resultObject;

            if (keysExist) {
                rnBiometrics
                    .createSignature({
                        promptMessage: 'Sign in',
                        payload: "payload",
                    })
                    .then(resultObject => {
                        const { success, signature } = resultObject;

                        if (success) {
                            console.log(signature);
                            auth()
                                .signInWithEmailAndPassword("toto@toto.com", "toto1234")
                                .then(() => {
                                    // setMmkvEmail("toto@toto.com");
                                    // setMmkvPassword("toto1234");
                                    navigation.navigate("Home")
                                    Alert.alert('Logged in');
                                })
                            // loginUser(data, navigation)
                            // verifySignatureWithServer(signature, payload);

                        }
                    })
                    .catch(err => console.log(err));
            } else {
                rnBiometrics
                    .createKeys()
                    .then(resultObject => {
                        const { publicKey } = resultObject;
                        console.log(publicKey);
                        // sendPublicKeyToServer(publicKey);
                    })
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));

};
