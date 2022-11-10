import axios from 'axios'
import { BASE_URL } from '../constants/urls'

let token = null

if (typeof window !== 'undefined') {
  // Perform localStorage action
  token = JSON.stringify(localStorage.getItem('access_token'))
}
/*
  Function to get base url based on language (micro services)
*/
const getURL = (server?: string) => {
  return BASE_URL
}

/*
  Axios config
*/
export const instance = axios.create({
  baseURL: getURL(),
  timeout: 5000, // 5 seconds
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)
