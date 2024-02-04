import { Platform } from 'react-native'
import { StatusBar as Status } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'

const App = () => {
  return (
    <NavigationContainer>
      {Platform.OS === 'ios' && <Status style="auto" />}
      <Tabs />
    </NavigationContainer>
  )
}

export default App
