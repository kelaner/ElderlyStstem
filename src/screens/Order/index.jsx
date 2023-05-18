import { StyleSheet, Button } from 'react-native'
import React from 'react'

const Index = ({ navigation }) => {
    return (
        <Button
            title="跳到首页"
            onPress={() => navigation.navigate('Home')}
        />
    )
}

export default Index

const styles = StyleSheet.create({})