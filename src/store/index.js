import { configureStore } from '@reduxjs/toolkit'
// import reducers from './reducers'
import counterSlice, { COUNTER } from './Counter'
import reduxThunk from 'redux-thunk'

export default configureStore({
    reducer: {
        [COUNTER]: counterSlice,
    },
    middleware: [reduxThunk]
})

