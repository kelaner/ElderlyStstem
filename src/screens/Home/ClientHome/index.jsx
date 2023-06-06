import { StyleSheet, View, Text } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'

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
      <View style={styles.second}>
        <Text style={styles.word}>按住说话</Text>
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
    width: 300,
    height: 30,
    top: 15
  },
  second: {
    flex: 1,
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#188cfc',
    borderBottomWidth: 1
  },
  word: {
    fontSize: 35,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#188cfc',
    letterSpacing: 20,
    textAlign: 'center'
  },
  nine: {
    flex: 10,
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
