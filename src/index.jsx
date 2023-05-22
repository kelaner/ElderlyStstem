import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainTab from './routes'
import { useSelector, useDispatch } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/NoAuth/Login'
import RegisterScreen from './screens/NoAuth/Register'

const Stack = createNativeStackNavigator();

const index = () => {
    const isLogin = useSelector(state => state.user.isLogin)
    const dispatch = useDispatch()


    return (
        <>
            {
                isLogin
                    ?
                    (<MainTab />)
                    :
                    (
                        <Stack.Navigator initialRouteName='Login'  >
                            <Stack.Screen name='Login' component={LoginScreen} />
                            <Stack.Screen name='Register' component={RegisterScreen} />
                        </Stack.Navigator>
                    )
            }
        </>
        // 
    )
}

export default index

const styles = StyleSheet.create({})