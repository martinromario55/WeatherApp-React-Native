import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Platform, StyleSheet } from 'react-native'
import { StatusBar as Status } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { container } = styles
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const fetchWeatherData = async () => {
    try {
      setLoading(true)
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      )
      const data = await res.json()
      setWeather(data)
      setLoading(false)
    } catch (error) {
      setError('Could not fetch error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat, lon])

  if (weather) console.log(weather)

  if (loading) {
    return <ActivityIndicator size={'large'} color={'blue'} style={container} />
  }

  return (
    <NavigationContainer>
      {Platform.OS === 'ios' && <Status style="auto" />}
      <Tabs />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
