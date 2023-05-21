import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.isLogin = true
        },
        loginFailed(state, action) {
            state.isLogin = false
        }
    }
})

export const { loginSuccess, loginFailed } = userSlice.actions

export default userSlice.reducer
