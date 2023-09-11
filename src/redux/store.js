import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '@/redux/api/apiSlice'
import pcBuildReducer from './pcBuild/pcBuildSlice'
export const store = configureStore({
    reducer: {
        pcBuild: pcBuildReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})