import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'Counter',
    initialState: {
        num: 1
    },
    reducers: {
        increment: (state, action) => {
            state.num += action.payload
        },
        decrement: (state, action) => {
            state.num -= action.payload
        }
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
