import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, waitFor } from '@testing-library/react'
import { setupServer } from 'msw/node'

import theme from 'theme'
import { getHandlers } from 'mocks/handlers'

import Statements from './index'

const handlers = getHandlers({ delay: 0 })
const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const renderStatements = (children: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

test('render statements page', async () => {
  const { getByText, getAllByText } = renderStatements(<Statements />)

  getByText('Extratos')
  const statements = await waitFor(() => getAllByText('TransferĂȘncia'))
  expect(statements).toHaveLength(10)
})
