import { configureStore } from '@reduxjs/toolkit'
import countryReducer from './country/countrySlice'
import LoaderReducer from "./loaderSlice"
export const store = configureStore({
  reducer: {
    country:countryReducer,
    loader:LoaderReducer,
  },
})