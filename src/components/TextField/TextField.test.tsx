import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import theme from 'theme'

import TextField, { masksTypes } from './index'

type Props = {
  maskType?: masksTypes
}

const TextFieldWithState = ({ maskType }: Props) => {
  const [text, setText] = React.useState('')

  return (
    <TextField
      name="name"
      label="label"
      maskType={maskType}
      onChange={(evt) => setText(evt.target.value)}
      value={text}
    />
  )
}

const renderTextField = (children: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

test('render text field', () => {
  const { getByRole, getByLabelText } = renderTextField(
    <TextField label="label" name="name" />
  )

  getByRole('textbox')
  getByLabelText('label')
})

test('types into the input', () => {
  const { getByLabelText } = renderTextField(<TextFieldWithState />)

  const input = getByLabelText('label')
  userEvent.type(input, 'input')
  expect(input).toHaveValue('input')
})

test('types into the input with agency mask', () => {
  const { getByLabelText } = renderTextField(
    <TextFieldWithState maskType={masksTypes.agency} />
  )

  const input = getByLabelText('label')
  userEvent.type(input, 'input')
  expect(input).toHaveValue('')
  userEvent.type(input, '111 1111')
  expect(input).toHaveValue('1111')
})

test('types into the input with account mask', () => {
  const { getByLabelText } = renderTextField(
    <TextFieldWithState maskType={masksTypes.account} />
  )

  const input = getByLabelText('label')
  userEvent.type(input, 'input')
  expect(input).toHaveValue('')
  userEvent.type(input, '111 1111')
  expect(input).toHaveValue('11111-1')
})

test('types into the input with currency mask', () => {
  const { getByLabelText } = renderTextField(
    <TextFieldWithState maskType={masksTypes.currency} />
  )

  const input = getByLabelText('label')
  userEvent.type(input, 'input')
  expect(input).toHaveValue('R$ 0,00')
  userEvent.type(input, '111')
  expect(input).toHaveValue('R$ 1,11')
})

test('show error message and icon', () => {
  const { getByLabelText, getByText, getByTestId } = renderTextField(
    <TextField
      label="label"
      name="name"
      error={{ type: 'type', message: 'message' }}
    />
  )

  getByLabelText('label')
  getByText('message')
  getByTestId('errorIcon')
})
