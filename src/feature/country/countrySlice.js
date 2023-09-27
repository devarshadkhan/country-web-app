import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { fetchCountryAll } from './countryapimiddleware'
import axiosInstance from '../../Axios/axios'
import { API } from '../../Axios/endpoint'
const initialState = {
    loading:false,
    countryData :[],
    countrySearch :[],
    error:false,
    success:false,
    message:""
}
export const fetchCountryAll = createAsyncThunk(
    'country/fetchCountry',
    async (thunkAPI) => {
      try {
        const response = await axiosInstance.get(API.getAllCountry)
        return response.data
      } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error)
      }
    }
  )
export const searchByCode = createAsyncThunk(
    'country/searchByCode',
    async (code,thunkAPI) => {
      try {
        const response = await axiosInstance.get(`${API.searchByCode}/${code}`)
        // console.log(response);
        return response.data
      } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error)
      }
    }
  )


 



export const countrySlice = createSlice({
    name:"country",
    initialState:initialState,
    reducers:{
        reset: (state)=>{
            state.loading = false,
            state.error = false,
            state.success = false,
            state.message = ""
        }
    },
    // extraReducers:{
    //     [fetchCountryAll.pending]:(state)=>{
    //         state.loading = true
    //     },
    //     [fetchCountryAll.pending]:(state,{payload})=>{
    //         state.loading = false,
    //                 state.countryData = payload,
    //                 state.success = true 
    //     },
    //     [fetchCountryAll.pending]:(state)=>{
    //         state.loading = true
    //     }
    // }
    extraReducers: (builder)=>{
        builder
        .addCase(fetchCountryAll.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchCountryAll.fulfilled, (state,action)=>{
            state.loading = false,
            state.countryData = action.payload,
            state.success = true 
        })
        .addCase(searchByCode.pending,(state)=>{
            state.loading = true
        })
        .addCase(searchByCode.fulfilled, (state,action)=>{
            state.loading = false,
            state.countrySearch = action.payload,
            state.success = true 
        })
    }
})

export default countrySlice.reducer
