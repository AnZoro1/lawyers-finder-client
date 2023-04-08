import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  orders: [],
  loading: false,
  error: null,
}

export const getOrdersAxios = createAsyncThunk(
  'getOrders/axios',
  async (data, thunkAPI) => {
    try {
      const { data } = await axios.get('http://localhost:4000/getOrders')

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error)
      }

      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const addOrderAxios = createAsyncThunk(
  'addOrder/axios',
  async ({ topic, text, price, author }, thunkAPI) => {
    console.log(topic, text, price, 'here')
    try {
      const { data } = await axios.post('http://localhost:4000/addOrder', {
        topic,
        text,
        price,
      })

      console.log(data)

      if (data.error) {
        return thunkAPI.rejectWithValue(data.error)
      }

      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrdersAxios.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getOrdersAxios.fulfilled, (state, action) => {
        state.loading = false
        state.orders = action.payload
      })
      .addCase(getOrdersAxios.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
      .addCase(addOrderAxios.pending, (state, action) => {
        state.loading = true
      })
      .addCase(addOrderAxios.fulfilled, (state, action) => {
        state.loading = false
        state.orders.push(action.payload)
      })
      .addCase(addOrderAxios.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
  },
})

export default orderSlice.reducer
