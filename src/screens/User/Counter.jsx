import { Button, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../store/Counter'

const Counter = () => {
    const num = useSelector(state => state.Counter.num)
    const dispatch = useDispatch()

    return (
        <View style={[styles.container]}>
            <Button title='-' onPress={() => dispatch(decrement(1))} />
            <Text>{num}</Text>
            <Button title='+' onPress={() => dispatch(increment(1))} />
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
