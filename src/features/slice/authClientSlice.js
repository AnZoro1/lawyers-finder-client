import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  token: localStorage.getItem('tokenClient'),
  error: null,
  signUpLoading: false,
  signInLoading: false,
  client: localStorage.getItem('client'),
}

export const authClientSignUpAxios = createAsyncThunk(
  'auth/clientSignUp',
  async ({ clientName, email, phoneNumber, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('http://localhost:4000/authClient', {
        clientName,
        email,
        phoneNumber,
        password,
      })

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error)
      }

      localStorage.setItem('client', data.clientName)

      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const authClientSignInAxios = createAsyncThunk(
  'auth/clientSignIn',
  async ({ clientName, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('http://localhost:4000/loginClient', {
        clientName,
        password,
      })

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error)
      }

      localStorage.setItem('tokenClient', data.token)
      localStorage.setItem('client', data.client.clientName)

      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const authClientSlice = createSlice({
  name: 'authClientSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authClientSignUpAxios.pending, (state, action) => {
        state.signUpLoading = true
        state.error = false
        state.isRegisterClient = false
      })
      .addCase(authClientSignUpAxios.fulfilled, (state, action) => {
        state.signUpLoading = false
        state.error = false
        state.isRegisterClient = true
        state.client = action.payload
      })
      .addCase(authClientSignUpAxios.rejected, (state, action) => {
        state.signUpLoading = false
        state.error = action.payload
        state.isRegisterClient = false
      })
      .addCase(authClientSignInAxios.pending, (state, action) => {
        state.signInLoading = true
        state.error = false
      })
      .addCase(authClientSignInAxios.fulfilled, (state, action) => {
        state.signInLoading = false
        state.error = false
        state.token = action.payload.token
        state.client = action.payload.client
      })
      .addCase(authClientSignInAxios.rejected, (state, action) => {
        state.signInLoading = false
        state.error = action.payload
      })
  },
})

export default authClientSlice.reducer
