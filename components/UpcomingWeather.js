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
import { Feather } from '@expo/vector-icons'

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
  // Item Component
  const Item = (props) => {
    const { dt_txt, min, max, condition } = props
    return (
      <View style={styles.item}>
        <Feather name="sun" size={50} color="white" />
        <Text style={styles.date}>{dt_txt}</Text>
        <Text style={styles.temp}>{max}</Text>
        <Text style={styles.temp}>{min}</Text>
      </View>
    )
  }

  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/cloudy.jpg')}
        style={styles.image}
      >
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
  item: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink',
    marginHorizontal: 16,
    marginVertical: 16
  },
  temp: {
    fontSize: 20,
    color: 'white'
  },
  date: {
    fontSize: 15,
    color: 'white'
  },
  image: {
    flex: 1
  }
})
