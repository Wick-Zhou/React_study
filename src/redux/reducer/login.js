import {
  LOGIN,
  LOGOUT
} from '../actionType'

const initState = { username: '', isLogin: false }

export default function loginReducer(pre = initState, action) {
  const { type, username } = action
  switch (type) {
    case LOGIN:
      return {...pre, username, isLogin: true }

    case LOGOUT:
      console.log('xxx');
      return { ...pre, isLogin: false }

    default:
      return pre
  }
}