import { configureStore } from '@reduxjs/toolkit'
import authClientSlice from '../slice/authClientSlice'
import authLawyerSlice from '../slice/authLawyerSlice'
import orderSlice from '../slice/orderSlice'

export const store = configureStore({
  reducer: {
    orderSlice,
    authClientSlice,
    authLawyerSlice,
  },
})
