import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function CurrentWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>Current Weather</Text>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6°</Text>
        <Text style={styles.feels}>Feels like 5°</Text>
        <View style={styles.hilowWrapper}>
          <Text style={styles.hilow}>High: 8°</Text>
          <Text style={styles.hilow}>Low: 6°</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's sunny</Text>
        <Text style={styles.message}>It's perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  temp: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  feels: {
    fontSize: 20,
    color: 'black',
  },
  hilowWrapper: {
    flexDirection: 'row',
  },
  hilow: {
    fontSize: 20,
    color: 'black',
  },
  bodyWrapper: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
})
