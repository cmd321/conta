import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import theme from 'theme'

import Button from './index'

const buttonText = 'Text'

const renderButton = (children: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

test('render button component with children', () => {
  const { getByText, getByRole } = renderButton(<Button>{buttonText}</Button>)

  getByText(buttonText)
  expect(getByRole('button')).not.toBeDisabled()
})

test('render loader component', () => {
  const { getByTestId, getByRole } = renderButton(
    <Button loading>{buttonText}</Button>
  )

  const LoaderNode = getByTestId('loader')
  const ButtonNode = getByRole('button')

  expect(ButtonNode).toBeDisabled()
  expect(LoaderNode).toBeInTheDocument()
})

test('click on the button', () => {
  let clicked = false
  const { getByRole } = renderButton(
    <Button
      onClick={() => {
        clicked = true
      }}
    >
      {buttonText}
    </Button>
  )

  const ButtonNode = getByRole('button')

  userEvent.click(ButtonNode)

  expect(clicked).toBe(true)
})
