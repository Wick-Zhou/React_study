import {createStore,combineReducers} from 'redux'
import countReducer from './reducer/count'
import loginReducer from './reducer/login'

const rootReducer=combineReducers({
  countReducer,
  loginReducer
})

const store = createStore(rootReducer)
export default store