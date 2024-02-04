import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { item, date, temp } = styles

  return (
    <View style={styles.item}>
      <Feather name={weatherType[condition].icon} size={50} color="white" />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
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
  }
})
