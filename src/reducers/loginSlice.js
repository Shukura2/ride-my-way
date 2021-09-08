import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'loginAuth',
    initialState: {
        user: null,
        loginError: '',
        email: "",
    }, 
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.email = action.payload.email
        },
        logout: (state) => {
            state.user = null;
        },
        setLoginError: (state, action) => {
            state.loginError = action.payload.loginError
        }
    }
})

export const { login, logout, setLoginError } = loginSlice.actions
export default loginSlice.reducer;