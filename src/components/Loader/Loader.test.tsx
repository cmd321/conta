import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import theme from 'theme'

import Loader from './index'

const renderLoader = (children: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

test('render loader', () => {
  const { getByTestId } = renderLoader(<Loader />)

  getByTestId('loader')
})
