import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icons from '@expo/vector-icons/Ionicons'
import HomeScreen from '../../screens/Home/MonitorHome'
import Toast from 'react-native-root-toast'

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
          headerTransparent: true,
          headerRight: () => (
            <Icons
              name={'call'}
              color={'white'}
              size={30}
              onPress={() => Toast.show('call')}
            />
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
