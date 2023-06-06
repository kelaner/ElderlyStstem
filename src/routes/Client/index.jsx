import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

import HomeScreen from './HomeStack'
import MainScreen from './MainStack'
import UserScreen from './UserStack'

const Tab = createBottomTabNavigator()

const index = () => {
  return (
    <Tab.Navigator
      initialRouteName='首页'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === '首页') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === '服务') {
            iconName = focused ? 'cube' : 'cube-outline'
          } else if (route.name === '我的') {
            iconName = focused ? 'person' : 'person-outline'
          }
          return (
            <Ionicons name={iconName} size={size + 3} color={color}></Ionicons>
          )
        }
      })}
    >
      <Tab.Screen
        name='首页'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 15
          }
        }}
      />
      <Tab.Screen
        name='服务'
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 15
          }
        }}
      />
      <Tab.Screen
        name='我的'
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 15
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40
  }
})
