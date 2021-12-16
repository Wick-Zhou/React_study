import { configureStore } from '@reduxjs/toolkit'
import countSliceReducer from './feature/countSlice'
import loadingSliceReducer from './feature/globalLoadingSlice'
import loginSliceReducer from './feature/loginSlice'

export default configureStore({
  reducer: {
    count: countSliceReducer,
    loading: loadingSliceReducer,
    login: loginSliceReducer,
  },
})
