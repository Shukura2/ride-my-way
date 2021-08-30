import { createSlice } from '@reduxjs/toolkit'

export const loginSliceDriver = createSlice({
    name: 'loginAuth',
    initialState: {
        user: null,
        loginErrors: '',
        email: "",
    }, 
    reducers: {
        loginDriver: (state, action) => {
            state.user = action.payload.user;
            state.email = action.payload.email
        },
        logoutDriver: (state) => {
            state.user = null;
        },
        setLoginDriverError: (state, action) => {
            state.loginError = action.payload.loginError
        }
    }
})

export const { loginDriver, logoutDriver, setLoginDriverError } = loginSliceDriver.actions

// export const loginUser = (state) => state.user.user

export default loginSliceDriver.reducer;