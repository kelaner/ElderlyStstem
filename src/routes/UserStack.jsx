import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserScreen from '../screens/User'
import AboutScreen from '../screens/User/About'
import SettingScreen from '../screens/User/Setting'
import LoginScreen from '../screens/NoAuth/Login'
import RegisterScreen from '../screens/NoAuth/Register'
import CounterScreen from '../screens/User/Counter'


const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='User'
        >
            <Stack.Screen
                name='User'
                component={UserScreen}
                options={{
                    title: "个人中心",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 30
                    },
                    headerRight: () => (
                        <Text
                            onPress={() => alert('客服')}>
                            客服
                        </Text>
                    )
                }}
            />

            <Stack.Screen
                name='About'
                component={AboutScreen}
                options={{
                    title: "关于",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 30
                    },
                }}
            />

            <Stack.Screen
                name='Setting'
                component={SettingScreen}
                options={{
                    title: "设置",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 30
                    },
                }}
            />

            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{
                    title: "登录",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 30
                    },
                }}
            />

            <Stack.Screen
                name='Register'
                component={RegisterScreen}
                options={{
                    title: "注册",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 30
                    },
                }}
            />

            <Stack.Screen
                name='Counter'
                component={CounterScreen}
                options={{
                    title: "计数",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 30
                    },
                }}
            />
        </Stack.Navigator>
    )
}

export default UserStack

const styles = StyleSheet.create({})