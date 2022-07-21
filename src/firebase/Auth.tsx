import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import { DashForm, RForm } from '../types/types';

/**** Create User ****/
export const createUser = (data: RForm) => {
    auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(() => {
            Alert.alert('User account created & signed in!');
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

/**** Login User ****/
export const loginUser = (data: RForm, navigation: any) => {
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

/**** Add New Collection ****/
const userAuth = auth().currentUser;
export const addNewUser = (data: DashForm) => {
    if (userAuth) {
        firestore()
            .collection('Users')
            .doc(userAuth.uid)
            .collection("App")
            .add({
                name: data.name,
                email: data.email,
                password: data.password,
                // uid: data.id,
                // type: data.type
            })
            .then(() => {
                Alert.alert('User added!');
            }).catch(error => {
                console.log("That database echoue!");

                console.log(error);
            });
    }
}

/**** Sign Out ****/
export const SignOutUser = (navigation: any) => {
    auth()
        .signOut()
        .then(() => {
            Alert.alert("Logged out")
            navigation.navigate("Login")
        });
}

/**** Edit Item ****/
export const editItem = (item: DashForm, navigation: any) => {
    // firestore()
    //     .collection('Users')
    //     .doc(userAuth?.uid)
    //     .collection('App')
    //     .doc(item.id)
    //     .update({
    //         name: item.email,
    //         email: item.email,
    //         password: item.password,
    //     })
    //     .then(() => {
    //         console.log('User updated!');
    return (
        navigation.navigate("Edit", { item: item })
    )
    // })
}

/**** Delete Item ****/
export const deleteItem = (id: string): void => {
    firestore()
        .collection('Users')
        .doc(userAuth?.uid)
        .collection('App')
        .doc(id)
        .delete()
        .then(() => {
            console.log("user " + id + " deleted");
        });
}

/* ********* get firestore ****************/

export const getAllFirestore = () => {
    firestore()
    .collection('Users')
    .get()
    .then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);
  
      querySnapshot.forEach(documentSnapshot => {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
      });
    });
  }

