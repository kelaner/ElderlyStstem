import { configureStore } from '@reduxjs/toolkit'
// import reducers from './reducers'
import counterSlice, { COUNTER } from './Counter'
import reduxThunk from 'redux-thunk'
import userReducer from './User' // 引入userReducer


export default configureStore({
    reducer: {
        [COUNTER]: counterSlice,
        user: userReducer,
    },
    middleware: [reduxThunk]
})

