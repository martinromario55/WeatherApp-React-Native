import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import moment from 'moment'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { item, date, temp, dateTextWrapper } = styles

  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color="white" />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
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
    backgroundColor: 'indianred',
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
  dateTextWrapper: {
    flexDirection: 'column'
  }
})
