import axios from 'axios'
import apiURL from './apiURL'

const axiosConfig = axios.create({
  baseURL: apiURL.baseURl,
  //   mong muon gui va nhan kieu du lieu la json
  headers: { 'Content-Type': 'application/json' },
  //   timeout: 2000,
})

axiosConfig.interceptors.request.use(
  (config: any) => {
    // do something
    return config
  },
  (error) => Promise.reject(error)
)

axiosConfig.interceptors.response.use(
  (config: any) => {
    // do something
    return config
  },
  (error) => Promise.reject(error)
)

const apiService = {
  get(urlApi: string, params?: any) {
    return axiosConfig
      .get(urlApi, params)
      .then((response) => response)
      .catch((error) => error)
  },
  post(urlApi: string, params?: any) {
    return axiosConfig
      .post(urlApi, params)
      .then((response) => response)
      .catch((error) => error)
  },
  patch(urlApi: string, params?: any) {
    return axiosConfig
      .patch(urlApi, params)
      .then((response) => response)
      .catch((error) => error)
  },
  put(urlApi: string, params?: any) {
    return axiosConfig
      .put(urlApi, params)
      .then((response) => response)
      .catch((error) => error)
  },
  delete(urlApi: string) {
    return axiosConfig
      .delete(urlApi)
      .then((response) => response)
      .catch((error) => error)
  },
}

export default apiService
