import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CurrentWeather from './components/CurrentWeather'

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
