import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import theme from 'theme'

import StatementList from './index'

const dataWithPositiveValue = [
  {
    id: 1,
    type: 'TRANSFER',
    value: 1000,
    date: new Date(2020, 0, 1).toISOString(),
  },
]

const dataWithNegativeValue = [
  {
    id: 1,
    type: 'TRANSFER',
    value: -1000,
    date: new Date(2020, 0, 1).toISOString(),
  },
]

const renderStatementList = (children: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

test('render statement list', () => {
  const { getByText } = renderStatementList(
    <StatementList data={dataWithPositiveValue} />
  )

  getByText('Transferência')
  getByText('01/01/2020')
  getByText('R$ 1.000,00')
})

test('show correct color for positive value', () => {
  const { getByText } = renderStatementList(
    <StatementList data={dataWithPositiveValue} />
  )

  expect(getByText('R$ 1.000,00')).toHaveStyle(`color: ${theme.colors.green};`)
})

test('show correct color for negative value', () => {
  const { getByText } = renderStatementList(
    <StatementList data={dataWithNegativeValue} />
  )

  expect(getByText('R$ -1.000,00')).toHaveStyle(`color: ${theme.colors.red};`)
})
