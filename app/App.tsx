import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from '@/app/index';
import SecondPage from '@/app/SecondPage';
import Login from '@/app/Login';
import Signup from '@/app/Signup';
import Forget from '@/app/Signup';
import Home from '@/app/Home';




export type RootStackParamList = {
  Index: undefined;
  SecondPage: undefined;
  Login:undefined;
  Signup:undefined;
  Forget:undefined;
  Home:undefined;

};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
        <Stack.Screen name="SecondPage" component={SecondPage} options={{ title: 'Second Page' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Signup" component={Signup} options={{ title: 'Signup' }} />
        <Stack.Screen name="Forget" component={Forget} options={{ title: 'Forget' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
