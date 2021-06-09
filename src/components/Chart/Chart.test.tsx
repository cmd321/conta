import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import theme from 'theme'

import Chart from './index'

const data = [
  {
    id: 1,
    date: new Date(2021, 0, 1).toISOString(),
    amountEntered: 1000,
    amountOut: 100,
  },
  {
    id: 2,
    date: new Date(2021, 0, 2).toISOString(),
    amountEntered: 5000,
    amountOut: 234,
  },
]

const renderChart = (children: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

test('render chart with data', () => {
  const { getAllByTestId } = renderChart(<Chart data={data} />)

  expect(getAllByTestId(/positiveValueRect/i)).toHaveLength(2)
  expect(getAllByTestId(/negativeValueRect/i)).toHaveLength(2)
})

test('get the information when hovering the chart', () => {
  const mockOnMouseOver = jest.fn()
  const { getByTestId } = renderChart(
    <Chart onMouseOver={mockOnMouseOver} data={data} />
  )

  userEvent.hover(getByTestId('positiveValueRect1'))
  userEvent.hover(getByTestId('positiveValueRect2'))

  expect(mockOnMouseOver).toHaveBeenCalledTimes(2)
})
