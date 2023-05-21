import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

const store = configureStore({
    reducer: reducers,
    middleware: [reduxThunk]
})

export default store
