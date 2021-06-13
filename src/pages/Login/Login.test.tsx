import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent, act, waitFor } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { ToastContainer } from 'react-toastify'
import userEvent from '@testing-library/user-event'

import theme from 'theme'
import { getHandlers } from 'mocks/handlers'

import Login from './index'

const handlers = getHandlers({ delay: 0 })
const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

const renderLogin = (children: JSX.Element) =>
  render(
    <ThemeProvider theme={theme}>
      <ToastContainer />
      {children}
    </ThemeProvider>
  )

test('render login page', () => {
  const { getByLabelText, getByRole, getByText } = renderLogin(<Login />)

  getByLabelText('Agência')
  getByLabelText('Conta')
  getByLabelText('Senha')
  getByRole('button')
  getByText('Entrar')
})

test('submit empty form', async () => {
  const { getAllByTestId, getByTestId } = renderLogin(<Login />)

  await act(async () => {
    fireEvent.submit(getByTestId('form'))
  })
  expect(getAllByTestId('errorIcon')).toHaveLength(3)
})

test('submit form with with value incorrect credentials', async () => {
  const { queryAllByTestId, getByTestId, getByLabelText, findByRole } =
    renderLogin(<Login />)

  userEvent.type(getByLabelText('Agência'), '1111')
  userEvent.type(getByLabelText('Conta'), '111111')
  userEvent.type(getByLabelText('Senha'), '111')
  await act(async () => {
    fireEvent.submit(getByTestId('form'))
  })
  expect(queryAllByTestId('errorMessage')).toHaveLength(0)
  expect(queryAllByTestId('errorIcon')).toHaveLength(0)
  await findByRole('alert')
})

test('submit form with with correct values', async () => {
  const { queryAllByTestId, getByTestId, getByLabelText } = renderLogin(
    <Login />
  )

  const mockSetItem = jest.fn()
  Storage.prototype.setItem = mockSetItem

  userEvent.type(getByLabelText('Agência'), '1234')
  userEvent.type(getByLabelText('Conta'), '123456')
  userEvent.type(getByLabelText('Senha'), 'password')
  await act(async () => {
    fireEvent.submit(getByTestId('form'))
  })

  expect(queryAllByTestId('errorMessage')).toHaveLength(0)
  expect(queryAllByTestId('errorIcon')).toHaveLength(0)
  await waitFor(() => expect(mockHistoryPush).toHaveBeenCalled())
  await waitFor(() => expect(mockSetItem).toHaveBeenCalled())
})
