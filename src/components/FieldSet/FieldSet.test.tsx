import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import theme from 'theme'

import FieldSet from './index'

const fieldSetText = 'Text'

const renderFieldSet = (children: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

test('render fieldset with children', () => {
  const { getByText } = renderFieldSet(
    <FieldSet name="test">{fieldSetText}</FieldSet>
  )

  getByText(fieldSetText)
})

test('render fieldset label', () => {
  const { getByText } = renderFieldSet(
    <FieldSet label={fieldSetText} optional name="test">
      <h1>Random</h1>
    </FieldSet>
  )

  expect(getByText(fieldSetText)).toHaveTextContent(`${fieldSetText}opcional`)
})

test('render fieldset error', () => {
  const { getByText, getByTestId } = renderFieldSet(
    <FieldSet error={{ type: 'type', message: fieldSetText }} name="test">
      <h1>Random</h1>
    </FieldSet>
  )

  getByTestId('errorIcon')
  getByText(fieldSetText)
})
