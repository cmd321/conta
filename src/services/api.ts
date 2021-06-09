import axios from 'axios'
// import useSWR from 'swr'

const api = axios.create({
  baseURL: 'http://localhost:9000/',
})

export const getToken = () => localStorage.getItem('TOKEN')

api.interceptors.request.use((config) => {
  const token = getToken()

  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${token}`

  return config
})

export const refreshToken = async () => {
  const { data } = await api.get<{ token: string }>('/user/refresh-token')

  return data.token
}

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 403) {
      const token = await refreshToken()
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      return api(originalRequest)
    }
    return Promise.reject(error)
  }
)

export const fetcher = (url: string) => api.get(url).then((res) => res.data)

export default api
