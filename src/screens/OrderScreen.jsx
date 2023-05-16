import { StyleSheet, Button } from 'react-native'
import React from 'react'

const OrderScreen = ({ navigation }) => {
    return (
        <Button
            title="跳到首页"
            onPress={() => navigation.navigate('Home')}
        />
    )
}

export default OrderScreen

const styles = StyleSheet.create({})