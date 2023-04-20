import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
        userInfo: {
            name: null
        }
    },
    reducers: {
        login: (state, action) => {
            state.isLogin = true;
            state.userInfo.name = action.payload;
        },
        logout: (state) => {
            state.isLogin = false;
            state.userInfo.name = null;
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;