import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import useGetWeather from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, error, weather] = useGetWeather()

  // console.log('weather data', weather, 'loading', loading, error)

  const { container, loadContainer } = styles

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
  return (
    <View style={container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator
          size={'large'}
          color={'blue'}
          style={loadContainer}
        />
      )}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
