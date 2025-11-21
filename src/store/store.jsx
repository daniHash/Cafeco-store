import { configureStore } from '@reduxjs/toolkit'
import adviceReducer from '../features/advice/adviceSlice'
import userReducer from '../features/auth/authSlice'
import productsReducer from '../features/product/productSlice'
import cartReducer from '../features/cart/cartSlice'
const store = configureStore({
  reducer: {
    advice: adviceReducer,
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
  },
})

export default store
