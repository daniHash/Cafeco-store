import { configureStore } from '@reduxjs/toolkit'
import adviceReducer from '../features/advice/adviceSlice'
import userReducer from '../features/auth/authSlice'
const store = configureStore({
  reducer: {
    advice: adviceReducer,
    user: userReducer,
  },
})

export default store
