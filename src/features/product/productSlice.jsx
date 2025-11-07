import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCofeProducts, getProduct } from '../../services/apiProducts'
const initialState = {
  products: [],
  productDetails: null,
  error: null,
  isLoading: false,
  isFetched: false,
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCofeProducts()
      return response
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)
export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getProduct(id)
      return response
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload
        state.isLoading = false
        state.isFetched = true
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload || 'Something went wrong'
        state.isLoading = false
        state.isFetched = false
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productDetails = action.payload
        state.isLoading = false
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.error = action.payload || 'Something went wrong'
        state.isLoading = false
      })
  },
  reducers: {
    deleteProduct() {},
    editeProduct() {},
  },
})

export default productSlice.reducer
export const { deleteProduct, editeProduct } = productSlice.actions
