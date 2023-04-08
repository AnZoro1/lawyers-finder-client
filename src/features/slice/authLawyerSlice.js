import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  token: localStorage.getItem('tokenLawyer'),
  loadingSingUp: false,
  loadingSingIn: false,
  error: null,
  isRegisterLawyer: null,
  lawyer: '',
}

export const registerLawyerSignUpAxios = createAsyncThunk(
  'register/lawyer',
  async ({ lawyerName, email, phoneNumber, password }, thunkAPI) => {
    console.log(lawyerName)
    console.log(email)
    console.log(phoneNumber)
    console.log(password)
    try {
      const { data } = await axios.post('http://localhost:4000/authLawyer', {
        lawyerName,
        email,
        phoneNumber,
        password,
      })

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error)
      }

      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const authLawyerSignInAxios = createAsyncThunk(
  'auth/lawyer',
  async ({ lawyerName, password }, thunkAPI) => {
    try {
      const { data } = await axios.post('http://localhost:4000/loginLawyer', {
        lawyerName,
        password,
      })

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error)
      }

      localStorage.setItem('tokenLawyer', data.token)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const lawyerSlice = createSlice({
  name: 'lawyerSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerLawyerSignUpAxios.pending, (state, action) => {
        state.loadingSingUp = true
        state.error = false
        state.isRegisterLawyer = false
      })
      .addCase(registerLawyerSignUpAxios.fulfilled, (state, action) => {
        state.loadingSingUp = false
        state.error = false
        state.isRegisterLawyer = true
        state.lawyer = action.payload
      })
      .addCase(registerLawyerSignUpAxios.rejected, (state, action) => {
        state.loadingSingUp = false
        state.error = action.payload
        state.isRegisterLawyer = false
      })
      .addCase(authLawyerSignInAxios.pending, (state, action) => {
        state.loadingSingIn = true
        state.error = false
      })
      .addCase(authLawyerSignInAxios.fulfilled, (state, action) => {
        state.loadingSingIn = false
        state.error = false
        state.token = action.payload.token
        state.lawyer = action.payload.lawyer
      })
      .addCase(authLawyerSignInAxios.rejected, (state, action) => {
        state.pending = false
        state.error = action.payload
      })
  },
})

export default lawyerSlice.reducer
