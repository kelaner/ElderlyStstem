import { StyleSheet } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SelectScreen from './screens/NoAuth/Select'
import LoginScreen from './screens/NoAuth/Login'
import RegisterScreen from './screens/NoAuth/Register'
import { StatusBar } from 'expo-status-bar'
import ClientTab from './routes/Client'
import MonitorTab from './routes/Monitor'
import ServerTab from './routes/Server'

const Stack = createNativeStackNavigator()

const index = () => {
  const isLogin = useSelector(state => state.user.isLogin)
  const selectValue = useSelector(state => state.select.value)

  return (
    <>
      <StatusBar style='light' backgroundColor='black' />
      {isLogin && selectValue === 0 ? (
        <ClientTab />
      ) : isLogin && selectValue === 1 ? (
        <MonitorTab />
      ) : isLogin && selectValue === 2 ? (
        <ServerTab />
      ) : (
        <Stack.Navigator initialRouteName='Select'>
          <Stack.Screen
            name='Select'
            component={SelectScreen}
            options={{
              title: '客户端选择',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 25
              }
            }}
          />
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{
              title: '登录',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 25
              }
            }}
          />
          <Stack.Screen
            name='Register'
            component={RegisterScreen}
            options={{
              title: '注册',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 25
              }
            }}
          />
        </Stack.Navigator>
      )}
    </>
    //
  )
}

export default index

const styles = StyleSheet.create({})
