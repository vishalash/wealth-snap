import { configureStore } from "@reduxjs/toolkit";
import authReducer, { authMiddleware } from "./authReducer";
import walletReducer from "./walletReducer";

export default configureStore({
    reducer: {
        auth: authReducer,
        wallet: walletReducer
    }
    ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
})