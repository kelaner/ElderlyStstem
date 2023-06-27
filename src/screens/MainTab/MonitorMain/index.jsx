import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Toast from 'react-native-root-toast'

const Index = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.second}>
        <View style={styles.card}>
          <View style={styles.face}>
            <Ionicons name={'person-outline'} size={70} color={'black'} />
          </View>
          <View style={styles.infor}>
            <Text style={[styles.word, { fontSize: 30, right: 20 }]}>
              用户基本信息
            </Text>
            <Text style={[styles.word, { fontSize: 15 }]}>张三</Text>
            <Text style={[styles.word, { fontSize: 15 }]}>63岁 男</Text>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <TouchableOpacity style={[styles.button]}>
          <Text style={{ fontSize: 25, padding: 10 }}>
            <Ionicons name={'location-outline'} size={30} />
            即时位置
          </Text>
          <Ionicons name={'chevron-forward-outline'} size={30} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]}>
          <Text style={{ fontSize: 25, padding: 10 }}>
            <Ionicons name={'call-outline'} size={30} />
            联系方式
          </Text>
          <Ionicons name={'chevron-forward-outline'} size={30} />
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
  second: {
    flex: 1,
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#188cfc',
    borderBottomWidth: 1,
    backgroundColor: '#2693e2',
    Image: '../../../../'
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  face: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infor: {
    height: 100,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  word: {
    color: 'white',
    textAlign: 'left'
  },

  main: {
    flex: 2,
    width: '100%',
    backgroundColor: '#dfdfdf',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 15,
    height: 55,
    width: 250,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center'
  }
})
