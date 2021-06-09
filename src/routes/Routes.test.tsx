import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import * as services from 'services/api'
import theme from 'theme'
import { routes } from './consts'
import Routes from './index'

const renderRoutes = ({ route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>,
    { wrapper: Router }
  )
}

const getLoginMock = jest.spyOn(services, 'getToken')

describe('enter the routes authenticated', () => {
  beforeEach(() => {
    getLoginMock.mockReturnValue('YOUR_TOKEN_HERE')
  })

  test('enter an invalid route will redirect to account home page', () => {
    const { getByText } = renderRoutes({
      route: '/invalid/route/test',
    })

    getByText('Resumo dos extratos por dia')
  })

  test('enter at the login route will redirect to account home page', () => {
    const { getByText } = renderRoutes({
      route: routes.login,
    })

    getByText('Resumo dos extratos por dia')
  })

  test('enter at the account home page will not redirect', () => {
    const { getByText } = renderRoutes({
      route: routes.home,
    })

    getByText('Resumo dos extratos por dia')
  })
})

describe('enter the routes without authentication', () => {
  beforeEach(() => {
    getLoginMock.mockReturnValue(null)
  })

  test('enter an invalid route will redirect to login page', () => {
    const { getByLabelText } = renderRoutes({
      route: '/invalid/route/test',
    })

    getByLabelText('Agência')
  })

  test('enter at the login route will not redirect', () => {
    const { getByLabelText } = renderRoutes({
      route: routes.login,
    })

    getByLabelText('Agência')
  })

  test('enter at the account home page will redirect to the login page', () => {
    const { getByLabelText } = renderRoutes({
      route: routes.home,
    })

    getByLabelText('Agência')
  })
})
