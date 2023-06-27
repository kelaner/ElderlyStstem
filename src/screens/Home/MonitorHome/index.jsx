import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import Toast from 'react-native-root-toast'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

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
        <Image
          source={require('../../../../assets/img/index21.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.card}>
          <View
            style={{
              borderRightColor: '#b0b0b0',
              borderRightWidth: 4
            }}
          >
            <Image
              source={require('../../../../assets/img/elder-avg.png')}
              style={styles.avg}
            />
          </View>

          <View style={{ padding: 20 }}>
            <Text style={{ padding: 8, fontWeight: 'bold' }}>姓名：</Text>
            <Text style={{ padding: 8, fontWeight: 'bold' }}>今日状态：</Text>
            <Text style={{ padding: 8, fontWeight: 'bold' }}>今日订单：</Text>
          </View>
        </View>

        <View style={{ display: 'flex' }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#cfcfcf',
              width: 200,
              height: 50,
              borderRadius: 2,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 20
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
              查阅历史订单
            </Text>
          </TouchableOpacity>
        </View>
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
    width: 260,
    height: 28,
    top: 12
  },
  second: {
    flex: 3,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10
  },

  word: {
    fontSize: 25,
    color: '#7d7d7d',
    textAlign: 'center'
  },

  main: {
    flex: 7,
    width: '100%',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: screenWidth - 50,
    height: ((screenWidth - 50) * 36) / 65
  },
  card: {
    width: screenWidth,
    height: 150,
    backgroundColor: '#f5f7f6',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 50
  },

  avg: {
    width: 100,
    height: 100,
    margin: 10,
    padding: 15
  }
})
