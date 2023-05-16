import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native'
import React, { useState } from 'react'

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.top} />
                <Image
                    style={styles.img}
                    source={require('../../assets/img/老年健康宣传周.png')}
                />
                <View style={styles.nine}>
                    <Image
                        style={styles.box}
                        source={require('../../assets/img/demo.png')}
                    />

                </View>
        </View >
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    top: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '75%',
        backgroundColor: '#5ea3e1',
        borderBottomRightRadius: 40,
        borderBottomLeftRadius:40,
    },
    img: {
        top: 20,
        width: 320,
        height: 142,
    },
    nine: {
        width: 360,
        height: 360,
        backgroundColor: 'white',
        borderRadius: 10,
        zIndex: -1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
    },
    box: {
        width: 300,
        height: 300,
    }
})