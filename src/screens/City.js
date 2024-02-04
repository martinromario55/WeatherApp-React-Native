import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground
} from 'react-native'
import React from 'react'
import IconText from '../components/IconText'
import moment from 'moment'

const City = ({ weatherData }) => {
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
    riseSetText,
    rowLayout
  } = styles

  const { name, country, population, sunrise, sunset } = weatherData
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={image}
      >
        <View style={cityWrapper}>
          <Text style={[cityName, cityText]}>{name}</Text>
          <Text style={[cityCountry, cityText]}>{country}</Text>
        </View>

        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>

        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
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
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 35,
    marginLeft: 7.5,
    color: 'red'
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    marginLeft: 7.5,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
