import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import { ReactComponent as Icon } from 'assets/savings.svg'

import theme from 'theme'

import InvestmentCard from './index'

const data = {
  buttons: [{ text: 'button1' }],
  icon: <Icon data-testid="icon" />,
  subTitle: 'subTitle',
  text: 'text',
  title: 'title',
}

const renderHeader = (children: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

test('render investment card', () => {
  const { getByText, getByTestId } = renderHeader(<InvestmentCard {...data} />)

  getByText(data.buttons[0].text)
  getByText(data.subTitle)
  getByText(data.text)
  getByText(data.title)
  getByTestId('icon')
})

test('render investment card with multiple buttons', () => {
  const { getByText, getByTestId } = renderHeader(
    <InvestmentCard
      {...data}
      buttons={[...data.buttons, { text: 'button2' }]}
    />
  )

  getByText(data.buttons[0].text)
  getByText('button2')
  getByText(data.subTitle)
  getByText(data.text)
  getByText(data.title)
  getByTestId('icon')
})
