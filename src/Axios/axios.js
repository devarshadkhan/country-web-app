import axios from "axios";
// import { store } from "../feature/store";
// import { setLoader } from "../feature/loaderSlice";
const axiosInstance = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // store.dispatch(setLoader(true));
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  
  function (response) {
    // store.dispatch(setLoader(false));
    return response;
  },
  function (error) {
    // store.dispatch(setLoader(false));
    return Promise.reject(error);
  }
);

export default axiosInstance;
