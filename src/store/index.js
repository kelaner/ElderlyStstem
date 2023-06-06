import { configureStore } from '@reduxjs/toolkit'
import counterSlice, { COUNTER } from './Counter'
import reduxThunk from 'redux-thunk'
import userReducer from './User'
import selectReducer from './Select'

export default configureStore({
  reducer: {
    [COUNTER]: counterSlice,
    user: userReducer,
    select: selectReducer
  },
  middleware: [reduxThunk]
})
