import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import axiosInstance from '../../Axios/axios';
import { API } from '../../Axios/endpoint';


export const fetchCountryAll = createAsyncThunk(
    'country/fetchCountry',
    async (thunkAPI) => {
      try {
        const response = await axiosInstance.get(API.getAllCountry)
        console.log(response);
        return response.data
      } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error)
      }
    }
  )
  