import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground
} from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import Ionicons from '@expo/vector-icons/Ionicons'
import Toast from 'react-native-root-toast'
import * as Animatable from 'react-native-animatable'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Locate = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('')

  const onChangeSearch = query => setSearchQuery(query)
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.five}>
          <TouchableOpacity>
            <Text style={styles.text}>乘车</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>步行</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>打车</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>公共交通</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>新能源</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        <View style={{ flex: 1 }}>
          <Image
            source={require('../../../../assets/img/map.png')}
            style={styles.img}
          ></Image>
        </View>

        <Animatable.View
          animation={'fadeInUpBig'}
          style={[styles.footer]}
          duration={500}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Image
              source={require('../../../../assets/img/locate-small.png')}
              style={{
                width: 20,
                height: 40,
                marginRight: 20,
                marginLeft: -40
              }}
            />
            <Text
              style={{
                fontWeight: 'bold',
                width: 180,
                alignContent: 'center',
                fontSize: 16
              }}
            >
              天津市西青区鸿信路
            </Text>
            <TouchableOpacity>
              <Image
                source={require('../../../../assets/img/message.png')}
                style={{ width: 30, height: 30, marginRight: 30 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../../assets/img/phone.png')}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 2,
              backgroundColor: '#fff6e2',
              width: screenWidth - 50,
              margin: 5,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Image
              source={require('../../../../assets/img/user-map.png')}
              style={{ width: 60, height: 60, margin: 20 }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ margin: 5, fontSize: 14 }}>用户信息</Text>
              <Text style={{ margin: 5, fontSize: 14 }}>工作要求</Text>
            </View>
          </View>

          <TouchableOpacity style={{ flex: 1 }}>
            <ImageBackground
              source={require('../../../../assets/img/index123.png')}
              style={{ width: screenWidth }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={require('../../../../assets/img/soup.png')}
                  style={{ width: 30, height: 30, margin: 15 }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <Text
                    style={{
                      fontSize: 25,
                      color: 'white',
                      top: -3,
                      marginLeft: 30
                    }}
                  >
                    正在前往约定地点
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  )
}

export default Locate

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
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  five: {
    flexDirection: 'row',
    justifyContent: 'space-around'
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
  text: {
    fontSize: 18
  },

  main: {
    flex: 10,
    width: '100%',
    backgroundColor: 'white'
  },
  footer: {
    flex: 0.6,
    top: -10,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'column',
    alignItems: 'center'
  },
  img: {
    width: screenWidth,
    flex: 1
  }
})
