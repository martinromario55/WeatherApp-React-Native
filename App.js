import { StyleSheet, Text, View, Platform } from 'react-native'
import { StatusBar as Status } from 'expo-status-bar'
import React from 'react'
import CurrentWeather from './screens/CurrentWeather'
import UpcomingWeather from './screens/UpcomingWeather'
import City from './screens/City'

const App = () => {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <Status style="auto" />}
      <City />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
