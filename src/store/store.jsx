import { configureStore } from '@reduxjs/toolkit'
import adviceReducer from '../features/advice/adviceSlice'
import userReducer from '../features/auth/authSlice'
import productsReducer from '../features/product/productSlice'
const store = configureStore({
  reducer: {
    advice: adviceReducer,
    user: userReducer,
    products: productsReducer,
  },
})

export default store
