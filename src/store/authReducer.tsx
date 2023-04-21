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

export const authMiddleware = () => (next:any) => (action:any) => {
  if (authSlice.actions.login.match(action)) {
    // Note: localStorage expects a string
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userName', action.payload);
  } else if (authSlice.actions.logout.match(action)) {
    localStorage.setItem('isAuthenticated', 'false');
    localStorage.removeItem('userName');
    localStorage.removeItem('walletInfo');
  }
  return next(action);
};

export default authSlice.reducer;