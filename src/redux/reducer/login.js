import {
  LOGIN,
  LOGOUT
} from '../actionType'
let sessionStorageIsLogin=window.sessionStorage.getItem('isLogin')
let sessionStorageUsername=window.sessionStorage.getItem('username')
const initState = { 
  username: sessionStorageUsername||'',
  isLogin: sessionStorageIsLogin||false
}

export default function loginReducer(pre = initState, action) {
  // console.log(pre)
  const { type, username } = action
  switch (type) {
    case LOGIN:
      return {...pre, username, isLogin: true }

    case LOGOUT:
      return { ...pre, username:'', isLogin: false }

    default:
      return pre
  }
}