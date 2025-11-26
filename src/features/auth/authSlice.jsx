import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { login, register, update } from '../../services/apiAuth'

const initialState = {
  user: null,
  loading: false,
  error: null,
  success: false,
}

export const registerFetch = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const res = await register(userData)
      return res.data || res
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const loginFetch = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await login(credentials)
      return res.data || res
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

export const updateFetch = createAsyncThunk(
  'auth/update',
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const res = await update(id, body)
      return res.data || res
    } catch (err) {
      return rejectWithValue(err.message)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem('user')
    },
    resetStatus: (state) => {
      state.success = false
      state.error = null
    },
    loadUserFromStorage: (state) => {
      const savedUser = localStorage.getItem('user')
      if (savedUser) state.user = JSON.parse(savedUser)
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }
      localStorage.setItem('user', JSON.stringify(state.user))
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
        state.success = true
        state.user = action.payload

        localStorage.setItem('user', JSON.stringify(action.payload))
      })
      .addCase(registerFetch.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(loginFetch.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(loginFetch.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.user = action.payload

        localStorage.setItem('user', JSON.stringify(action.payload))
      })
      .addCase(loginFetch.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateFetch.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(updateFetch.fulfilled, (state) => {
        state.loading = false
        state.success = true
      })
  },
})

export default authSlice.reducer
export const { logout, resetStatus, updateUser, loadUserFromStorage } =
  authSlice.actions
