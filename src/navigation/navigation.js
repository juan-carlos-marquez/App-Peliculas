import React from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    
      <Stack.Navigator
      screenOptions={{
        headerShown:false,
        statusBarColor:'white'
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    
  );
}

export default Navigation;