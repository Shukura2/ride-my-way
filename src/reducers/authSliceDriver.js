import { createSlice } from '@reduxjs/toolkit'

export const authSliceDriver = createSlice({
  name: 'authentication',
  initialState: {
    isAuthenticated: false,
    id: "",
    fullName: "",
    email: "",
    signupError: ""
  },
  reducers: {
    setCurrentDriver: (state, action) => {
        state.id = action.payload.id
        state.isAuthenticated = true
        state.fullName = action.payload.fullName
        state.email = action.payload.email
      },
      setSignupError: (state, action) => {
        state.signupError = action.payload.signupError
      }
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentDriver, setSignupError} = authSliceDriver.actions
export default authSliceDriver.reducer