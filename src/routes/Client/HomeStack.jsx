import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../screens/Home/ClientHome'

const Stack = createNativeStackNavigator()

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
