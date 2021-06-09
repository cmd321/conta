import useSWR from 'swr'

import api, { fetcher } from './api'

export const login = async (credentials: {
  account: string
  agency: string
  password: string
}) => {
  const { data } = await api.post<{ token: string }>('/user/login', credentials)
  localStorage.setItem('TOKEN', data.token)
}

export const logout = () => {
  localStorage.removeItem('TOKEN')
}

export const useUser = () => {
  const { data, error } = useSWR<{
    name: string
    balance: number
    agency: string
    account: string
  }>('/user', fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}
