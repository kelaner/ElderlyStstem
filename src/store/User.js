import { createSlice } from '@reduxjs/toolkit'


export const COUNTER = "Counter";
const { reducer: counterSlice, actions } = createSlice({
    name: COUNTER,
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

export const { increment, decrement } = actions
export default counterSlice
