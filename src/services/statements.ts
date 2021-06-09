import useSWR from 'swr'

import { fetcher } from './api'

type Statement = {
  id: number
  date: string
  type: string
  value: number
}

type StatementsGroupedByDate = {
  id: number
  amountEntered: number
  amountOut: number
  date: string
}

export const useStatements = () => {
  const { data, error } = useSWR<Statement[]>('/statements', fetcher)

  return {
    statements: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useStatementsGroupedByDate = () => {
  const { data, error } = useSWR<StatementsGroupedByDate[]>(
    '/statements/grouped-by-day',
    fetcher
  )

  return {
    statements: data,
    isLoading: !error && !data,
    isError: error,
  }
}
