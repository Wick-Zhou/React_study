import { createSlice } from '@reduxjs/toolkit'

const sessionStorageIsLogin = JSON.parse(window.sessionStorage.getItem('isLogin'))
const sessionStorageUsername = window.sessionStorage.getItem('username')
export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    username: sessionStorageUsername || '',
    isLogin: sessionStorageIsLogin || false,
  },
  reducers: {
    changeLogin(state, action) {
      // console.log(action)
      state.username = action.payload.username
      state.isLogin = action.payload.isLogin
      return state
    },
  },
})

export const { changeLogin } = loginSlice.actions
export default loginSlice.reducer
