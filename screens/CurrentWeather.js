import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

export default function CurrentWeather() {
  const {
    wrapper,
    container,
    temp,
    title,
    feels,
    hilowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Text style={title}>Current Weather</Text>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>{'6°'}</Text>
        <Text style={feels}>{'Feels like 5°'}</Text>
        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low: 6'}
          containerStyles={hilowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={"It's sunny"}
        messageTwo={"It's perfect t-shirt weather"}
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
  temp: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black'
  },
  feels: {
    fontSize: 20,
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
