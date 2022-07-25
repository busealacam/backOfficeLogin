import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { DashBoard } from './components/DashBoard';
import { DashBoardEditScreen } from './screens/DashboardEditScreen';
import { GalleryScreen } from './screens/GalleryScreen';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { SignUpScreen } from './screens/SignUpScreen';
import { NavigationTypeParamList } from './src/types/types';

const Stack = createNativeStackNavigator<NavigationTypeParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Signup' component={SignUpScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Admin' component={DashBoard} />
        <Stack.Screen name='Edit' component={DashBoardEditScreen} />
        <Stack.Screen name='Gallery' component={GalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};
