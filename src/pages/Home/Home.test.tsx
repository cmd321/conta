import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { setupServer } from 'msw/node'

import theme from 'theme'
import { handlers } from 'mocks/handlers'

import Home from './index'

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const renderHome = (children: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

test('render home page', () => {
  const { getByText } = renderHome(<Home />)

  getByText('Resumo dos extratos por dia')
})

test('shows information when hovering the chart', async () => {
  const { getByText, findByTestId } = renderHome(<Home />)

  const positiveValueNode = await findByTestId('positiveValueRect1')
  const negativeValueNode = await findByTestId('negativeValueRect1')

  userEvent.hover(positiveValueNode)
  getByText('01/01/2020')
  getByText('R$ 272,00')
  userEvent.hover(negativeValueNode)
  getByText('01/01/2020')
  getByText('R$ -172,00')
})
