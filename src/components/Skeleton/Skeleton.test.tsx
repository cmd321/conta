import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import theme from 'theme'

import Skeleton from './index'

const renderSkeleton = (children: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

test('render skeleton component', () => {
  const { getByTestId } = renderSkeleton(<Skeleton height="30px" />)

  getByTestId('skeleton')
})
