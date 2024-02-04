import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const ErrorItem = () => {
  const { errorContainer, errorMessage } = styles
  return (
    <View style={errorContainer}>
      <Text style={errorMessage}>Sorry something went wrong.</Text>
      <Feather name={'frown'} size={100} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorMessage: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 10,
    fontWeight: 'bold'
  }
})

export default ErrorItem
