import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icons from '@expo/vector-icons/MaterialCommunityIcons'

import HomeScreen from '../screens/HomeScreen'
import Customer from '../screens/Customer'


const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation }) => {
    const [text, setText] = useState('')

    const searchIcon = () => (
        <Icons name={'magnify'} size={25} />
    )

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='客服'
                component={Customer}
            ></Stack.Screen>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: '',
                    headerTitleAlign: "center",
                    headerTransparent: true,
                    // headerTitle: () => (
                    //     <Input
                    //         style={styles.search}
                    //         value={text}
                    //         accessoryRight={searchIcon}
                    //         onChangeText={text => setText(text)}
                    //     ></Input>
                    // ),
                    headerRight: () => (
                        <Icons
                            name={'face-agent'}
                            size={40}
                            onPress={() => navigation.navigate('客服')}
                        />
                    ),

                    headerLeft: () => (
                        <Icons
                            name={'map-marker-radius-outline'}
                            size={40}
                            onPress={() => alert('定位')}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({
    search: {
        top: 5,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
        width: 230,
        borderRadius: 50,
    },
})