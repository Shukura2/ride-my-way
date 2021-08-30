import { createSlice } from '@reduxjs/toolkit'

export const OfferSlice = createSlice({
  name: 'authentication',
  initialState: {
    isAuthenticated: false,
    amount: "",
    destination: "",
    offerData:[]
  },
  reducers: {
   setAddOffer: (state, action) => {
      state.isAuthenticated = true
      state.amount = action.payload.amount
      state.destination = action.payload.destination
    }, 
    editModal: (state, action) => {
      state.isAuthenticated = true
      state.amount = action.payload.amount
      state.destination = action.payload.destination
    },
    setOffers: (state, action) => {
      state.offerData = action.payload.offerData
    },
    driverDetails: (state, action) => {
     
    }
  },
  
})

// Action creators are generated for each case reducer function
export const { setAddOffer, editModal, setOffers } = OfferSlice.actions

export default OfferSlice.reducer