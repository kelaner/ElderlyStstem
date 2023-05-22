import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
    userInfo: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.isLogin = true
            state.userInfo = action.payload
        },
        loginFailed(state, action) {
            state.isLogin = false
            state.userInfo = null
        }
    }
})

export const { loginSuccess, loginFailed } = userSlice.actions

export default userSlice.reducer
