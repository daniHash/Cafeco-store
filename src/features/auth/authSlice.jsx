import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { login, register, update, getUser } from '../../services/apiAuth'

const initialState = {
  user: null,
  loading: false,
  error: null,
  success: false,
  isFetched: false,
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
export const getUserFetch = createAsyncThunk(
  'auth/getUser',
  async (id, { rejectWithValue }) => {
    try {
      const res = await getUser(id)
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
    resetUser: (state) => {
      state.user = null
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
      .addCase(updateFetch.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getUserFetch.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.isFetched = true
      })
      .addCase(getUserFetch.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isFetched = false
      })
      .addCase(getUserFetch.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
  },
})

export default authSlice.reducer
export const {
  logout,
  resetUser,
  resetStatus,
  updateUser,
  loadUserFromStorage,
} = authSlice.actions
