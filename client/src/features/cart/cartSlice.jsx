import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  apiAddItem,
  apiClearCart,
  apiDecreaseItem,
  apiIncreaseItem,
  apiRemoveItem,
  getUserCart,
} from '../../services/apiCart'
const initialState = {
  cart: [],
  error: null,
  isLoading: false,
  isFetched: false,
  loadingProductId: null,
  loadingAction: null,
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
export const addItemAsync = createAsyncThunk(
  'cart/addItemAsync',
  async (item, { rejectWithValue }) => {
    try {
      const response = await apiAddItem(item)
      return response
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)
export const clearCartAsync = createAsyncThunk(
  'cart/clearCartAsync',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClearCart()
      return response
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)
export const removeItemAsync = createAsyncThunk(
  'cart/removeItemAsync',
  async (id, { rejectWithValue }) => {
    try {
      await apiRemoveItem(id)
      return id
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const increaseAsync = createAsyncThunk(
  'cart/increaseAsync',
  async (id, { rejectWithValue }) => {
    try {
      await apiIncreaseItem(id)
      return id
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const decreaseAsync = createAsyncThunk(
  'cart/decreaseAsync',
  async (id, { rejectWithValue }) => {
    try {
      await apiDecreaseItem(id)
      return id
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload)
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
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
    resetCart: (state) => {
      state.cart = []
      state.error = null
      state.isLoading = false
      state.isFetched = false
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
        state.isFetched = true
      })
      .addCase(clearCartAsync.fulfilled, (state) => {
        state.cart = []
      })
      .addCase(addItemAsync.rejected, (state) => {
        state.loadingProductId = false
        state.loadingAction = null
      })
      .addCase(addItemAsync.pending, (state, action) => {
        state.loadingProductId = action.meta.arg.productId
        state.loadingAction = 'add'
      })
      .addCase(addItemAsync.fulfilled, (state) => {
        state.loadingProductId = null
        state.loadingAction = null
      })
      .addCase(increaseAsync.pending, (state, action) => {
        state.loadingProductId = action.meta.arg
        state.loadingAction = 'increase'
      })
      .addCase(increaseAsync.fulfilled, (state) => {
        state.loadingProductId = null
        state.loadingAction = null
      })
      .addCase(increaseAsync.rejected, (state) => {
        state.loadingProductId = null
        state.loadingAction = null
      })
      .addCase(decreaseAsync.pending, (state, action) => {
        state.loadingProductId = action.meta.arg
        state.loadingAction = 'decrease'
      })
      .addCase(decreaseAsync.fulfilled, (state) => {
        state.loadingProductId = null
        state.loadingAction = null
      })
      .addCase(decreaseAsync.rejected, (state) => {
        state.loadingProductId = null
        state.loadingAction = null
      })
  },
})

export default cartSlice.reducer
export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  resetCart,
} = cartSlice.actions
