import {
  LOGIN,
} from '../actionType'

const initState=false

export default function loginReducer(pre=initState,action){
  const {type}=action
  switch (type) {
    case LOGIN:
      console.log(pre);
      return pre=true

    default:
      return pre
  }
}