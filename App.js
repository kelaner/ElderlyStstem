import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import React from 'react'
import Index from './src'
import { Provider as StoreProvider } from 'react-redux'
// import store from './src/redux/store'
import store from './src/store'



export default function App() {
    return (
        <StoreProvider store={store}>
            <RootSiblingParent>
                <NavigationContainer>
                    <Index />
                </NavigationContainer>
            </RootSiblingParent>
        </StoreProvider>

    )
}