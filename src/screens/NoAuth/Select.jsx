import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import * as React from 'react'
import * as Animatable from 'react-native-animatable'
import { useSelector, useDispatch } from 'react-redux'
import { setValue } from '../../store/Select'
import Toast from 'react-native-root-toast'

const Select = ({ navigation }) => {
  const dispatch = useDispatch()

  const handleClick = value => {
    dispatch(setValue(value))
    if (value === 0) {
      Toast.show('进入用户端')
    }
    if (value === 1) {
      Toast.show('进入监护端')
    }
    if (value === 2) {
      Toast.show('进入服务端')
    }
    navigation.navigate('Login')
  }

  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={require('../../../assets/img/index_5.png')}
        style={[styles.bgImage]}
      >
        <View style={[styles.header]}>
          <Text style={[styles.headerText]}>Welcome!</Text>
        </View>
        <Animatable.View
          animation={'fadeInUpBig'}
          style={[styles.footer]}
          duration={500}
        >
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => handleClick(0)}
          >
            <Text style={[styles.textSign]}>用户端</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => handleClick(1)}
          >
            <Text style={[styles.textSign]}>监护端</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => handleClick(2)}
          >
            <Text style={[styles.textSign]}>服务端</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ImageBackground>
    </View>
  )
}

export default Select

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 100
  },

  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  footer: {
    flex: 2.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 30,
    alignItems: 'center',
    paddingTop: 60
  },
  button: {
    marginTop: 30,
    height: 50,
    width: 250,
    borderRadius: 10,
    backgroundColor: '#1444ab',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSign: {
    textAlign: 'center',
    fontSize: 21,
    color: '#fff'
  }
})
