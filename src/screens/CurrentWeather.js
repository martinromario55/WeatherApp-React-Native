/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

export default function CurrentWeather({ weatherData }) {
  const {
    wrapper,
    container,
    tempStyle,
    title,
    feels,
    hilowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles
  // console.log(weatherData)
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData
  const weatherCondition = weather[0].main
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
    >
      <View style={container}>
        <Text style={title}>Current Weather</Text>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="black"
        />
        <Text style={tempStyle}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>

        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={hilowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20
  },
  tempStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black'
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  hilowWrapper: {
    flexDirection: 'row'
  },
  highLow: {
    fontSize: 20,
    color: 'black'
  },
  bodyWrapper: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
