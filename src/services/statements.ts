import useSWR, { useSWRInfinite } from 'swr'

import { fetcher } from './api'

type Statement = {
  id: number
  date: string
  type: string
  value: number
}

type StatamentPagination = {
  count: number
  rows: Statement[]
}

type StatementsGroupedByDate = {
  id: number
  amountEntered: number
  amountOut: number
  date: string
}

const getRows = (data: StatamentPagination[]) => {
  return data.reduce<Statement[]>((acc, curr) => {
    return [...acc, ...curr.rows]
  }, [])
}

export const useStatements = () => {
  const { data, error, setSize, size } = useSWRInfinite<StatamentPagination>(
    (index) => `/statements?page=${index + 1}`,
    fetcher
  )

  const limit = data ? data[0].count : 0

  return {
    data: data ? getRows(data) : [],
    isLoading: !error && !data,
    isError: error,
    limit,
    setSize,
    size,
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
