import { configureStore } from '@reduxjs/toolkit'
import authSlice from './reducers/authSlice'
import loginSlice from './reducers/loginSlice'
import authSliceDriver  from './reducers/authSliceDriver'
import loginSliceDriver from './reducers/loginSliceDriver'
import OfferSlice from './reducers/OfferSlice'

export default configureStore({
  reducer: { 
    auth: authSlice,
    user: loginSlice,
    authDriver: authSliceDriver,
    driver: loginSliceDriver,
    offers : OfferSlice
  },
})