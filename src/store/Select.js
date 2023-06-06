import { createSlice } from '@reduxjs/toolkit'

// 创建slice
const selectSlice = createSlice({
  name: 'select',
  initialState: {
    value: null
  },
  reducers: {
    setValue (state, action) {
      state.value = action.payload
    }
  }
})

export const { setValue } = selectSlice.actions

export default selectSlice.reducer
