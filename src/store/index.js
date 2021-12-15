import { configureStore } from '@reduxjs/toolkit'
import countSliceReducer from './feature/countSlice'
import loadingSliceReducer from './feature/globalLoading'
import loginSliceReducer from './feature/login'

export default configureStore({
  reducer: {
    count: countSliceReducer,
    loading: loadingSliceReducer,
    login: loginSliceReducer,
  },
})
