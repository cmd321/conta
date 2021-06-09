import api from './api'

export const makeTransfer = (body: {
  agency: string
  account: string
  value: number
}) => api.post('/transfer', body)
