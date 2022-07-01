import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { DashBoard } from './components/DashBoard';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { SignUpScreen } from './screens/SignUpScreen';

export type NavigationTypeParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Admin: undefined;
}

const Stack = createNativeStackNavigator<NavigationTypeParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Signup' component={SignUpScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Admin' component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};
