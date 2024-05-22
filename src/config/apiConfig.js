import axios from "axios"

export const ApiConfig = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

export const setAuthToken = (token) => {
  if(token) {
    ApiConfig.defaults.headers.common["Authorization"] = `Bearer ${token}`
  } else {
    delete ApiConfig.defaults.headers.common["Authorization"]
  }
}