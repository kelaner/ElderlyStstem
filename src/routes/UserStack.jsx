import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserScreen from '../screens/UserScreen'

const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='User'
                component={UserScreen}
                options={{
                    title: "个人中心",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize:30
                    },
                    headerRight: () => (
                        <Text
                            onPress={() => alert('客服')}>
                            客服
                        </Text>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default UserStack

const styles = StyleSheet.create({})