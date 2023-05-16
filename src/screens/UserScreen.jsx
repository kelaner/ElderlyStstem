import { StyleSheet, Button } from 'react-native'
import React from 'react'

const UserScreen = ({ navigation }) => {
    return (
        <Button
            title="跳到首页"
            onPress={() => navigation.navigate('Home')}
        />
    )
}

export default UserScreen

const styles = StyleSheet.create({})