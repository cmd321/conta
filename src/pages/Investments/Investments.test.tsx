import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import theme from 'theme'

import InvestmentsPage from './index'

const renderHome = (children: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

test('render investments page', () => {
  const { getByText, getAllByText } = renderHome(<InvestmentsPage />)

  getByText('Poupança')
  getByText('Fundos de investimento')
  getByText('Ver todos')
  getByText('Investir')
  getByText('Resgatar')
  getByText('Fundos de investimento')
  expect(getAllByText('Investido')).toHaveLength(2)
  expect(getAllByText('R$ 0')).toHaveLength(2)
})
