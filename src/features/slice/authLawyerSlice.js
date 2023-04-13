import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  token: localStorage.getItem('tokenLawyer'),
  loadingSingUp: false,
  loadingSingIn: false,
  error: null,
  lawyer: localStorage.getItem('lawyer'),
  lawyerFullData: localStorage.getItem('lawyerId'),
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
      localStorage.setItem('lawyer', data.lawyerName)
      localStorage.setItem('lawyerId', data._id)
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
      localStorage.setItem('lawyer', data.lawyer.lawyerName)
      localStorage.setItem('lawyerId', data.lawyer._id)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const addOrderForLawyerAxios = createAsyncThunk(
  'addOrder/lawyer',
  async ({ id, lawyerId }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`http://localhost:4000/${lawyerId}`, {
        id,
      })
    } catch (error) {}
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
      })
      .addCase(registerLawyerSignUpAxios.fulfilled, (state, action) => {
        state.loadingSingUp = false
        state.error = false
        state.lawyer = action.payload
        state.lawyerFullData = action.payload
      })
      .addCase(registerLawyerSignUpAxios.rejected, (state, action) => {
        state.loadingSingUp = false
        state.error = action.payload
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
        state.lawyerFullData = action.payload
      })
      .addCase(authLawyerSignInAxios.rejected, (state, action) => {
        state.pending = false
        state.error = action.payload
      })
  },
})

export default lawyerSlice.reducer
