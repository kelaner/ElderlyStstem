import { StyleSheet, View, Text } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import Toast from 'react-native-root-toast'

const Index = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const onChangeSearch = query => setSearchQuery(query)

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Searchbar
          style={styles.search}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>

      <View style={styles.nine}></View>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  top: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#188cfc',
    width: '100%'
  },
  search: {
    width: 280,
    height: 30,
    top: 11,
    right: 15
  },
  nine: {
    flex: 11,
    width: '100%',
    height: 360,
    backgroundColor: '#ebebeb',
    borderRadius: 10,
    zIndex: -1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'center'
  }
})
