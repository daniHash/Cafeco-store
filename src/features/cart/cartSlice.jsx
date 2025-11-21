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
    removeItem: () => {},
    clearCart: () => {},
    increaseItemQuantity: () => {},
    decreaseItemQuantity: () => {},
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
