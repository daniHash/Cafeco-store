import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCofeProducts } from '../../services/apiProducts'
const initialState = {
  products: [],
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
  },
  reducers: {
    getProduct() {},
    deleteProduct() {},
    editeProduct() {},
  },
})

export default productSlice.reducer
export const { getProducts, getProduct, deleteProduct, editeProduct } =
  productSlice.actions
