import { StyleSheet, Text, View, Platform } from 'react-native'
import { StatusBar as Status } from 'expo-status-bar'
import React from 'react'
import CurrentWeather from './components/CurrentWeather'
import UpcomingWeather from './components/UpcomingWeather'

const App = () => {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <Status style="auto" />}
      <UpcomingWeather />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
