import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground
} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const City = () => {
  const {
    container,
    image,
    cityWrapper,
    cityName,
    cityCountry,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText
  } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../assets/city-background.jpg')}
        style={image}
      >
        <View style={cityWrapper}>
          <Text style={[cityName, cityText]}>Nairobi</Text>
          <Text style={[cityCountry, cityText]}>Kenya</Text>
        </View>

        <View style={populationWrapper}>
          <Feather name="user" size={50} color="red" />
          <Text style={populationText}>8000</Text>
        </View>

        <View style={riseSetWrapper}>
          <Feather name="sunrise" size={50} color="white" />
          <Text style={riseSetText}>6:46:58am</Text>
          <Feather name="sunset" size={50} color="white" />
          <Text style={riseSetText}>6:28:15pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default City

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  image: {
    width: '100%',
    height: '100%'
  },
  cityWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  cityName: {
    fontSize: 40
  },
  cityCountry: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignItems: 'center',

    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 35,
    marginLeft: 7.5,
    color: 'red',
    fontWeight: 'bold'
  },
  riseSetWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    marginLeft: 7.5,
    color: 'white',
    fontWeight: 'bold'
  }
})
