import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAdvice } from '../../services/apiAdvice'
const initialState = {
  advice: '',
  loading: false,
  error: null,
  fetched: false,
}

export const fetchAdvice = createAsyncThunk(
  'advice/fetchAdvice',
  async (_, { getState, rejectWithValue }) => {
    const { advice } = getState()
    if (advice.fetched) return advice.advice

    try {
      const data = await getAdvice()
      return data.slip.advice
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const adviceSlice = createSlice({
  name: 'advice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvice.pending, (state) => {
        state.error = null
        state.loading = true
      })
      .addCase(fetchAdvice.fulfilled, (state, action) => {
        state.advice = action.payload // یا جایگزین کردن: state.advices = [action.payload]
        state.loading = false
        state.fetched = true
      })
      .addCase(fetchAdvice.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
  },
})

export default adviceSlice.reducer
