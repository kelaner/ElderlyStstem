import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import * as React from 'react'
import * as Animatable from 'react-native-animatable'
import Toast from 'react-native-root-toast'
import Icons from '@expo/vector-icons/MaterialCommunityIcons'
import { LinearGradient } from 'expo-linear-gradient'

const Register = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: '',
    checkUsername: false,
    isValiteUser: true,
    password1: '',
    checkPassword1: false,
    isValitePassword1: true,
    hidePassword1: true,
    password2: '',
    checkPassword2: false,
    isValitePassword2: true,
    hidePassword2: true
  })

  const validateUsername = val => {
    if (val.trim().length >= 2) {
      setData({
        ...data,
        username: val,
        checkUsername: true,
        isValiteUser: true
      })
    } else {
      setData({
        ...data,
        username: val,
        checkUsername: false,
        isValiteUser: false
      })
    }
  }

  const handValideUser = val => {
    if (val.trim().length >= 2) {
      setData({
        ...data,
        isValiteUser: true
      })
    } else {
      setData({
        ...data,
        isValiteUser: false
      })
    }
  }

  const validatePassword1 = val => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password1: val,
        checkPassword1: true,
        isValitePassword1: true
      })
    } else {
      setData({
        ...data,
        password1: val,
        checkPassword1: false,
        isValitePassword1: false
      })
    }
  }

  const validatePassword2 = val => {
    if (val.trim() === data.password1) {
      setData({
        ...data,
        password2: val,
        checkPassword2: true,
        isValitePassword2: true
      })
    } else {
      setData({
        ...data,
        password2: val,
        checkPassword2: false,
        isValitePassword2: false
      })
    }
  }

  const handValidePassword1 = val => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        isValitePassword1: true
      })
    } else {
      setData({
        ...data,
        isValitePassword1: false
      })
    }
  }

  const handValidePassword2 = val => {
    if (val.trim() === data.password1) {
      setData({
        ...data,
        isValitePassword2: true
      })
    } else {
      setData({
        ...data,
        isValitePassword2: false
      })
    }
  }

  const updateHidePassword1 = () => {
    setData({
      ...data,
      hidePassword1: !data.hidePassword1
    })
  }

  const updateHidePassword2 = () => {
    setData({
      ...data,
      hidePassword2: !data.hidePassword2
    })
  }

  const handleLogin = () => {
    if (
      data.username.length == 0 ||
      data.password1.length == 0 ||
      data.password2.length == 0
    ) {
      Toast.show('用户名和密码不能为空')
      return
    }
    if (data.username.length < 2) {
      Toast.show('用户名最短2位')
      return
    }
    if (data.password1.length < 6) {
      Toast.show('密码最短6位')
      return
    }
    if (data.password1 !== data.password2) {
      Toast.show('确认密码与原值不匹配')
      return
    }

    Toast.show('注册成功')
    navigation.navigate('Login')
  }

  return (
    <View style={[styles.container]}>
      <ImageBackground
        source={require('../../../assets/img/index_8.jpg')}
        style={[styles.bgImage]}
      >
        <View style={[styles.header]}>
          <Text style={[styles.headerText]}>用户注册</Text>
        </View>
        <Animatable.View
          animation={'fadeInUpBig'}
          style={[styles.footer]}
          duration={500}
        >
          <ScrollView>
            <View style={[styles.action]}>
              <Icons name={'account-outline'} size={30} />
              <TextInput
                style={[styles.input]}
                placeholder='用户名'
                value={data.username}
                onChangeText={val => validateUsername(val)}
                onEndEditing={e => handValideUser(e.nativeEvent.text)}
              />
              {data.checkUsername ? (
                <Animatable.View animation='bounceIn'>
                  <Icons name={'check-circle-outline'} size={30} />
                </Animatable.View>
              ) : null}
            </View>
            {data.isValiteUser ? null : (
              <Animatable.View animation='fadeInLeft' duration={300}>
                <Text style={[styles.errerMsg, { position: 'absolute' }]}>
                  用户名最短2位
                </Text>
              </Animatable.View>
            )}

            <View style={[styles.action]}>
              <Icons name={'lock-outline'} size={30} />
              <TextInput
                style={[styles.input]}
                placeholder='密码'
                value={data.password1}
                secureTextEntry={data.hidePassword1 ? true : false}
                onChangeText={val => validatePassword1(val)}
                onEndEditing={e => handValidePassword1(e.nativeEvent.text)}
              />
              <TouchableOpacity onPress={updateHidePassword1}>
                {data.hidePassword1 ? (
                  <Icons name={'eye-off-outline'} size={30} />
                ) : (
                  <Icons name={'eye-outline'} size={30} />
                )}
              </TouchableOpacity>
            </View>
            {data.isValitePassword1 ? null : (
              <Animatable.View animation='fadeInLeft' duration={300}>
                <Text style={[styles.errerMsg, { position: 'absolute' }]}>
                  密码最短6位
                </Text>
              </Animatable.View>
            )}

            <View style={[styles.action]}>
              <Icons name={'lock-outline'} size={30} />
              <TextInput
                style={[styles.input]}
                placeholder='确认密码'
                value={data.password2}
                secureTextEntry={data.hidePassword2 ? true : false}
                onChangeText={val => validatePassword2(val)}
                onEndEditing={e => handValidePassword2(e.nativeEvent.text)}
              />
              <TouchableOpacity onPress={updateHidePassword2}>
                {data.hidePassword2 ? (
                  <Icons name={'eye-off-outline'} size={30} />
                ) : (
                  <Icons name={'eye-outline'} size={30} />
                )}
              </TouchableOpacity>
            </View>
            {data.isValitePassword2 ? null : (
              <Animatable.View animation='fadeInLeft' duration={300}>
                <Text style={[styles.errerMsg, { position: 'absolute' }]}>
                  确认密码与原值不匹配
                </Text>
              </Animatable.View>
            )}

            {/* 按钮 */}
            <View style={styles.button}>
              <TouchableOpacity style={styles.signIn} onPress={handleLogin}>
                <LinearGradient
                  colors={['#08d4c4', '#01ab9d']}
                  style={styles.signIn}
                >
                  <Text style={[styles.textSign, { color: '#fff' }]}>注册</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={[
                  styles.signIn,
                  {
                    borderColor: '#009387',
                    borderWidth: 1,
                    marginTop: 15
                  }
                ]}
              >
                <Text style={[styles.textSign, { color: '#009387' }]}>
                  返回登陆
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animatable.View>
      </ImageBackground>
    </View>
  )
}

export default Register

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
    flex: 4.0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    pacdingHorizontal: 20,
    paddingvertical: 30
  },
  action: {
    flexDirection: 'row',
    marginTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    paddingHorizontal: 30
  },
  input: {
    flex: 1,
    marginTop: 0,
    fontSize: 20,
    paddingLeft: 10,
    color: '#05375a'
  },
  errerMsg: {
    color: 'red',
    fontSize: 15,
    paddingHorizontal: 33,
    opacity: 0.7
  },
  button: {
    marginTop: 60,
    paddingHorizontal: 35
  },
  signIn: {
    flex: 1,
    height: 35,
    borderRadius: 10
  },
  textSign: {
    textAlign: 'center',
    fontSize: 21
  }
})
