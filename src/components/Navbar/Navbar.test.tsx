import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { routes } from 'routes/consts'

import theme from 'theme'

import Navbar from './index'

const renderNavbar = (children: JSX.Element) =>
  render(
    <Router>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Router>
  )

test('render navbar', () => {
  const { getByText } = renderNavbar(<Navbar />)

  getByText('Início')
  getByText('Transferência')
  getByText('Investimentos')
  getByText('Extrato')
  getByText('Sair')
})

test('anchor tags have the correct values ​​for the href attribute', () => {
  const { getByText } = renderNavbar(<Navbar />)

  expect(getByText('Início')).toHaveAttribute('href', routes.home)
  expect(getByText('Transferência')).toHaveAttribute('href', routes.transfer)
  expect(getByText('Investimentos')).toHaveAttribute('href', routes.investments)
  expect(getByText('Extrato')).toHaveAttribute('href', routes.statement)
})

test('click on the logout button', () => {
  const { getByText } = renderNavbar(<Navbar />)

  const mockRemoveItem = jest.fn()
  Storage.prototype.removeItem = mockRemoveItem

  userEvent.click(getByText('Sair'))

  expect(mockRemoveItem).toHaveBeenCalledTimes(1)
})
