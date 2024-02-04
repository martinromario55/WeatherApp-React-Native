import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem'

const UpcomingWeather = () => {
  // DATA
  const DATA = [
    {
      dt_txt: '2023-02-18 12:00:00',
      main: {
        temp_min: 8.55,
        temp_max: 7.55
      },
      weather: [
        {
          main: 'Clear'
        }
      ]
    },
    {
      dt_txt: '2023-02-19 15:00:00',
      main: {
        temp_min: 8.55,
        temp_max: 7.55
      },
      weather: [
        {
          main: 'Clouds'
        }
      ]
    },
    {
      dt_txt: '2023-02-20 18:00:00',
      main: {
        temp_min: 8.55,
        temp_max: 7.55
      },
      weather: [
        {
          main: 'rain'
        }
      ]
    }
  ]

  const { container, image } = styles
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../assets/cloudy.jpg')} style={image}>
        <Text>UpcomingWeather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default UpcomingWeather

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },

  image: {
    flex: 1
  }
})
