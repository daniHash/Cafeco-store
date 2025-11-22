import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUserCart } from '../../services/apiCart'
const initialState = {
  cart: [],
  error: null,
  isLoading: false,
}

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUserCart()
      return response
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: () => {},
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
    clearCart: () => {},
    increaseItemQuantity: (state, action) => {
      state.cart.find((item) => {
        if (item.id === action.payload) {
          item.quantity++
          item.totalprice = item.quantity * item.price
        }
      })
    },
    decreaseItemQuantity: (state, action) => {
      state.cart.find((item) => {
        if (item.id === action.payload) {
          item.quantity--
          item.totalprice = item.quantity * item.price
        }
        if (item.quantity === 0)
          state.cart = state.cart.filter((item) => item.id !== action.payload)
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.rejected, (state, action) => {
        state.error = action.payload || 'Something went wrong'
        state.isLoading = false
      })
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cart = action.payload
        state.isLoading = false
      })
  },
})

export default cartSlice.reducer
export const {
  addItem,
  removeItem,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions
