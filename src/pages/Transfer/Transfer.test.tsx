import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, fireEvent, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ToastContainer } from 'react-toastify'
import { setupServer } from 'msw/node'

import theme from 'theme'
import { getHandlers } from 'mocks/handlers'

import Transfer from './index'

const handlers = getHandlers({ delay: 0 })
const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const renderTransfer = (children: JSX.Element) =>
  render(
    <ThemeProvider theme={theme}>
      <ToastContainer />
      {children}
    </ThemeProvider>
  )

test('render transfer page', () => {
  const { getByLabelText, getByRole, getByText } = renderTransfer(<Transfer />)

  getByLabelText('Agência')
  getByLabelText('Conta')
  getByLabelText('Valor')
  getByRole('button')
  getByText('Transferir')
})

test('submit empty form', async () => {
  const { getAllByTestId, getByTestId } = renderTransfer(<Transfer />)

  await act(async () => {
    fireEvent.submit(getByTestId('form'))
  })
  expect(getAllByTestId('errorIcon')).toHaveLength(3)
})

test('submit form with with value greater than balance account', async () => {
  const { queryAllByTestId, getByTestId, getByLabelText, findByRole } =
    renderTransfer(<Transfer />)

  userEvent.type(getByLabelText('Agência'), '1111')
  userEvent.type(getByLabelText('Valor'), '250000')
  userEvent.type(getByLabelText('Conta'), '111111')
  await act(async () => {
    fireEvent.submit(getByTestId('form'))
  })
  expect(queryAllByTestId('errorMessage')).toHaveLength(0)
  expect(queryAllByTestId('errorIcon')).toHaveLength(0)
  const toastNode = await findByRole('alert')
  expect(toastNode).toHaveTextContent(
    'Você não tem saldo suficiente para efetuar essa transferência.'
  )
})

test('submit form with with correct values', async () => {
  const { queryAllByTestId, getByTestId, getByLabelText, findByRole } =
    renderTransfer(<Transfer />)

  userEvent.type(getByLabelText('Agência'), '1111')
  userEvent.type(getByLabelText('Valor'), '10000')
  userEvent.type(getByLabelText('Conta'), '111111')
  await act(async () => {
    fireEvent.submit(getByTestId('form'))
  })
  expect(queryAllByTestId('errorMessage')).toHaveLength(0)
  expect(queryAllByTestId('errorIcon')).toHaveLength(0)
  const toastNode = await findByRole('alert')
  expect(toastNode).toHaveTextContent(
    'A transferência foi efetuada com sucesso!'
  )
})
