import {createStore,combineReducers} from 'redux'
import countReducer from './reducer/count'
import loginReducer from './reducer/login'
import globalLoadingReducer from './reducer/globalLoading'

const rootReducer=combineReducers({
  countReducer,
  loginReducer,
  globalLoadingReducer
})

const store = createStore(rootReducer)
export default store