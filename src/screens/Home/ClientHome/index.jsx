import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons'
import Toast from 'react-native-root-toast'

const Index = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('')

  const onChangeSearch = query => setSearchQuery(query)
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Searchbar
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.search}
        />
      </View>
      <View style={styles.second}>
        <View style={[styles.icon, { right: 20 }]}>
          <TouchableOpacity>
            <Ionicons name={'home-sharp'} color={'white'} size={17} />
          </TouchableOpacity>
        </View>
        <Text style={styles.word}>按住说话</Text>
        <View style={[styles.icon, { left: 20 }]}>
          <TouchableOpacity>
            <Ionicons name={'chatbubble-ellipses'} color={'white'} size={17} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        <TouchableOpacity
          onPress={() => {
            Toast.show('录音结束')
          }}
        >
          <Image
            source={require('../../../../assets/img/voice.png')}
            style={{ width: 300, height: 300 }}
          />
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
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
  icon: {
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#148cfc'
  },

  main: {
    flex: 10,
    width: '100%',
    backgroundColor: '#f6f6f6',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
