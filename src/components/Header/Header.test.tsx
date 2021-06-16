import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import theme from 'theme'

import Header from './index'

const user = {
  name: 'name',
  account: 'account',
  agency: 'string',
  balance: 100,
}

const renderHeader = (children: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

test('render header with user data', () => {
  const { getByText } = renderHeader(<Header isLoading={false} user={user} />)

  getByText(user.name)
  getByText('R$ 100,00')
  expect(getByText(/account/i)).toHaveTextContent(
    `agência ${user.agency} conta ${user.account}`
  )
})
