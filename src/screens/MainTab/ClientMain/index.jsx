import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons'
import Toast from 'react-native-root-toast'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Index = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.second}>
        <Image
          source={require('../../../../assets/img/index12.png')}
          style={styles.img}
        />
        <View style={styles.evaluate}>
          <TouchableOpacity>
            <Image
              source={require('../../../../assets/img/x.png')}
              style={styles.avg}
            />
          </TouchableOpacity>
          <Text style={styles.word}>评价</Text>
          <TouchableOpacity>
            <Image
              source={require('../../../../assets/img/qt.png')}
              style={styles.avg}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.star}>
          <TouchableOpacity>
            <Image
              source={require('../../../../assets/img/gray-star.png')}
              style={styles.imgstar}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../../../assets/img/gray-star.png')}
              style={styles.imgstar}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../../../assets/img/gray-star.png')}
              style={styles.imgstar}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../../../assets/img/gray-star.png')}
              style={styles.imgstar}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../../../assets/img/gray-star.png')}
              style={styles.imgstar}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ color: 'red' }}>比较满意</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TouchableOpacity style={styles.button}>
              <Text>服务态度恶劣</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>服务不及时</Text>
            </TouchableOpacity>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TouchableOpacity style={styles.button}>
              <Text>服务不到位</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>其他</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: 'flex'
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#cfcfcf',
              width: 200,
              height: 35,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              margin: 20,
              display: 'flex'
            }}
          >
            <Text style={{ fontSize: 20 }}>提交</Text>
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
  second: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#e8e8e8',
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 4
  },

  word: {
    fontSize: 25,
    color: '#7d7d7d',
    textAlign: 'center'
  },

  main: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: screenWidth,
    height: (screenWidth * 4) / 7
  },

  avg: {
    width: 20,
    height: 20,
    margin: 10,
    padding: 15
  },
  evaluate: {
    backgroundColor: '#ffffff',
    width: screenWidth,
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  star: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  imgstar: {
    width: 60,
    height: 60,
    margin: 5
  },
  button: {
    width: 150,
    height: 25,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center'
  }
})
