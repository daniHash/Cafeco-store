import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { login } from '../../services/apiAuth'
const initialState = {
  users: [],
  error: null,
  loading: false,
  success: false,
}

export const registerFetch = createAsyncThunk(
  'user/registeruser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await login(userData)
      return response.data || response
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.success = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerFetch.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(registerFetch.fulfilled, (state, action) => {
        state.loading = false
        state.users.push(action.payload)
        state.success = true
      })
      .addCase(registerFetch.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.success = false
      })
  },
})

export default userSlice.reducer
export const { resetStatus } = userSlice.actions
