import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import * as React from 'react'
import * as Animatable from 'react-native-animatable';
import Toast from 'react-native-root-toast';
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const Login = ({ navigation }) => {
    const [username, setUsername] = React.useState('')
    const [checkUsername, setCheckUsername] = React.useState(false)
    const [isValiteUser, setIsValiteUser] = React.useState(true)
    const [password, setPassword] = React.useState('')
    const [checkPassword, setCheckPassword] = React.useState(false)
    const [isValitePassword, setIsValitePassword] = React.useState(true)
    const [hidePassword, setHidePassword] = React.useState(true)


    const validateUsername = (val) => {
        if (val.trim().length >= 2) {
            setUsername(val)
            setCheckUsername(true)
            setIsValiteUser(true)
        } else {
            setUsername(val)
            setCheckUsername(false)
            setIsValiteUser(false)
        }
    }

    const handValideUser = (val) => {
        if (val.trim().length >= 2) {
            setIsValiteUser(true)
        } else {
            setIsValiteUser(false)
        }
    }

    const validatePassword = (val) => {
        if (val.trim().length >= 8) {
            setPassword(val)
            setCheckPassword(true)
            setIsValitePassword(true)
        } else {
            setPassword(val)
            setCheckPassword(false)
            setIsValitePassword(false)
        }
    }

    const handValidePassword = (val) => {
        if (val.trim().length >= 8) {
            setIsValitePassword(true)
        } else {
            setIsValitePassword(false)
        }
    }

    const updateHidePassword = () => {
        setHidePassword(!hidePassword)
    }

    const handleLogin = () => {
        if (username.length == 0 || password.length == 0) {
            Toast.show('用户名和密码不能为空')
            return;
        }
        if (username.length < 2) {
            Toast.show('用户名最短2位')
            return;
        }
        if (password.length < 8) {
            Toast.show('密码最短8位')
            return;
        }

        Toast.show('登陆成功')
    }


    return (
        <View style={[styles.container]}>
            <ImageBackground
                source={require('../../../assets/img/index_8.jpg')}
                style={[styles.bgImage]}
            >
                <View style={[styles.header]}>
                    <Text style={[styles.headerText]}>Welcome!</Text>
                </View>
                <Animatable.View
                    animation={"fadeInUpBig"}
                    style={[styles.footer]}
                    duration={500}
                >
                    <ScrollView>
                        <View style={[styles.action]}>
                            <Icons name={'account-outline'} size={30} />
                            <TextInput
                                style={[styles.input]}
                                placeholder="用户名"
                                value={username}
                                onChangeText={(val) => validateUsername(val)}
                                onEndEditing={(e) => handValideUser(e.nativeEvent.text)}
                            />
                            {
                                checkUsername
                                    ?
                                    <Animatable.View animation='bounceIn'>
                                        <Icons name={'check-circle-outline'} size={30} />
                                    </Animatable.View>
                                    :
                                    null
                            }
                        </View>
                        {
                            isValiteUser
                                ?
                                null
                                :
                                <Animatable.View animation='fadeInLeft' duration={300}>
                                    <Text style={[styles.errerMsg, { position: 'absolute' }]}>用户名最短2位</Text>
                                </Animatable.View>

                        }

                        <View style={[styles.action]}>
                            <Icons name={'lock-outline'} size={30} />
                            <TextInput
                                style={[styles.input]}
                                placeholder="密码"
                                value={password}
                                secureTextEntry={hidePassword ? true : false}
                                onChangeText={(val) => validatePassword(val)}
                                onEndEditing={(e) => handValidePassword(e.nativeEvent.text)}
                            />
                            <TouchableOpacity onPress={updateHidePassword}>
                                {
                                    hidePassword
                                        ?
                                        <Icons name={'eye-off-outline'} size={30} />
                                        :
                                        <Icons name={'eye-outline'} size={30} />
                                }
                            </TouchableOpacity>
                        </View>
                        {
                            isValitePassword
                                ?
                                null
                                :
                                <Animatable.View animation='fadeInLeft' duration={300}>
                                    <Text style={[styles.errerMsg, { position: 'absolute' }]}>密码最短8位</Text>
                                </Animatable.View>

                        }

                        {/* 按钮 */}
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={styles.signIn}
                                onPress={handleLogin}>
                                <LinearGradient
                                    colors={['#08d4c4', '#01ab9d']}
                                    style={styles.signIn}>
                                    <Text style={[styles.textSign, { color: '#fff' }]}>登录</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Register')}
                                style={[styles.signIn, {
                                    borderColor: '#009387',
                                    borderWidth: 1,
                                    marginTop: 15,
                                }]}>
                                <Text style={[styles.textSign, { color: '#009387' }]}>注册</Text>
                            </TouchableOpacity>
                        </View>






                    </ScrollView>

                </Animatable.View>

            </ImageBackground>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'

    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 100,
    },

    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        pacdingHorizontal: 20,
        paddingvertical: 30
    },
    action: {
        flexDirection: 'row',
        marginTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        paddingHorizontal: 30
    },
    input: {
        flex: 1,
        marginTop: 0,
        fontSize: 20,
        paddingLeft: 10,
        color: '#05375a',
    },
    errerMsg: {
        color: 'red',
        fontSize: 15,
        paddingHorizontal: 33,
        opacity: 0.7,
    },
    button: {
        marginTop: 60,
        paddingHorizontal: 35
    },
    signIn: {
        flex: 1,
        height: 35,
        borderRadius: 10,
    },
    textSign: {
        textAlign: 'center',
        fontSize:21,
    },
})