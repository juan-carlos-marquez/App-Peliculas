
// import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation/navigation'
import { StatusBar } from 'expo-status-bar'


export default function App() {
  return (
    <NavigationContainer >
       
      <Navigation/>
      {/* <FadeScreens/> */}
    </NavigationContainer>
  )
}

{/* <StatusBar style="auto" /> */}