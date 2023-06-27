import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from '@expo/vector-icons/Ionicons'
import ClientScreen from '../../screens/MainTab/ClientMain'
import Toast from 'react-native-root-toast'

const Stack = createNativeStackNavigator()

const OrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Order'
        component={ClientScreen}
        options={{
          title: '订单已完成',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#148cfc'
          },
          headerTitleStyle: {
            fontSize: 22,
            color: 'white'
          },
          headerLeft: () => (
            <Ionicons
              name={'chevron-back'}
              color={'white'}
              size={29}
              onPress={() => Toast.show('back')}
            />
          ),
          headerRight: () => (
            <Ionicons
              name={'menu'}
              color={'white'}
              size={29}
              onPress={() => Toast.show('menu')}
            />
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default OrderStack

const styles = StyleSheet.create({})
