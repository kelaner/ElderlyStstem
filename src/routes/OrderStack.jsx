import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OrderScreen from '../screens/OrderScreen'

const Stack = createNativeStackNavigator();

const OrderStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Order'
                component={OrderScreen}
                options={{
                    title: '我的订单',
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 30
                    },
                    headerRight: () => (
                        <Text
                            onPress={() => alert('消息')}>
                            消息
                        </Text>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default OrderStack

const styles = StyleSheet.create({})