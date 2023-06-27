import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Toast from 'react-native-root-toast'
import Ionicons from '@expo/vector-icons/Ionicons'
import OrderScreen from '../../screens/MainTab/ServerMain'
import LocateScreen from '../../screens/MainTab/ServerMain/Locate'

const Stack = createNativeStackNavigator()

const OrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Order'
        component={OrderScreen}
        options={{
          title: '我的订单',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 30
          },
          headerLeft: () => (
            <Ionicons
              name={'chevron-back'}
              size={28}
              onPress={() => Toast.show('back')}
            />
          ),

          headerRight: () => (
            <Ionicons
              name={'notifications-outline'}
              size={28}
              onPress={() => Toast.show('notice')}
            />
          )
        }}
      />

      <Stack.Screen
        name='Locate'
        component={LocateScreen}
        options={{
          title: '接单',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 21
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default OrderStack

const styles = StyleSheet.create({})
