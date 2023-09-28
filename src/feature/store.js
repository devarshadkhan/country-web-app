import { configureStore } from '@reduxjs/toolkit'
import countrySlice from './country/countrySlice'
import LoaderReducer from "./loaderSlice"
export const store = configureStore({
  reducer: {
    country:countrySlice,
    loader:LoaderReducer,
  },
})