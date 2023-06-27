import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import OrderScreen from '../../screens/MainTab/MonitorMain'

const Stack = createNativeStackNavigator()

const OrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Order'
        component={OrderScreen}
        options={{
          title: '监护',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 30
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default OrderStack

const styles = StyleSheet.create({})
