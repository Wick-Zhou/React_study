import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: { username: '', isLogin: false },
  reducers: {
    changeLogin(state, action) {
      state.username = action.payload.username
      state.isLogin = action.payload.isLogin
      return state
    },
  },
})

export const { changeLogin } = loginSlice.actions
export default loginSlice.reducer
