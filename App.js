import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import useGetWeather from './src/hooks/useGetWeather'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, error, weather] = useGetWeather()

  console.log('weather data', weather, 'loading', loading, error)

  const { container } = styles
  if (loading) {
    return <ActivityIndicator size={'large'} color={'blue'} style={container} />
  }

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
