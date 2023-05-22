import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from '@expo/vector-icons/MaterialCommunityIcons'
import Toast from 'react-native-root-toast'
import { useSelector, useDispatch } from 'react-redux'
import { loginFailed } from '../../store/User'

const Index = ({ navigation }) => {

    const isLogin = useSelector(state => state.user.isLogin)
    const dispatch = useDispatch()

   const doLogout = () => {
       dispatch(loginFailed())
       Toast.show('退出成功')
    }
    
    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView>
                <View style={[styles.avatarBox]}>
                    <Image
                        source={require('../../../assets/favicon.png')}
                        style={[styles.avatar]}
                    />
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('About')}
                >
                    <View style={[styles.listItems]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name={'information-outline'} size={25} color={'green'} />
                            <Text style={{ marginLeft: 10, fontSize: 18 }}>关于</Text>
                        </View>
                        <Icons name={'chevron-right'} size={30} color={'#1e1e1e'} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => Toast.show('aaa')}
                >
                    <View style={[styles.listItems]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name={'cog-outline'} size={25} color={'purple'} />
                            <Text style={{ marginLeft: 10, fontSize: 18 }}>设置</Text>
                        </View>
                        <Icons name={'chevron-right'} size={30} color={'#1e1e1e'} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <View style={[styles.listItems]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name={'login'} size={25} color={'red'} />
                            <Text style={{ marginLeft: 10, fontSize: 18 }}>登录</Text>
                        </View>
                        <Icons name={'chevron-right'} size={30} color={'#1e1e1e'} />
                    </View>
                </TouchableOpacity>


                
                <TouchableOpacity
                    onPress={() => navigation.navigate('Counter')}
                >
                    <View style={[styles.listItems]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name={'logout'} size={25} color={'blue'} />
                            <Text style={{ marginLeft: 10, fontSize: 18 }}>计数器</Text>
                        </View>
                        <Icons name={'chevron-right'} size={30} color={'#1e1e1e'} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => doLogout()}
                >
                    <View style={[styles.listItems]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name={'logout'} size={25} color={'blue'} />
                            <Text style={{ marginLeft: 10, fontSize: 18 }}>退出</Text>
                        </View>
                        <Icons name={'chevron-right'} size={30} color={'#1e1e1e'} />
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>

    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start'
    },
    avatarBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    avatar: {
        width: 80,
        height: 80,
        marginVertical: 10
    },
    listItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        height: 60,
        paddingHorizontal: 20,
    }

})