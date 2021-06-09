import * as React from 'react'

import { useStatementsGroupedByDate } from 'services/statements'
import {
  formatNumberToBrCurrency,
  getDateSeparatedByBars,
} from 'helpers/format'

import Chart from 'components/Chart'

import {
  ChartColumn,
  ColumnsWrapper,
  CurrencyText,
  DateTitle,
  Title,
  Wrapper,
} from './styles'

function Home(): JSX.Element {
  const { statements } = useStatementsGroupedByDate()

  const [date, setDate] = React.useState<string>()
  const [value, setValue] = React.useState<number>()

  const handleOnMouseOver = (
    _: React.MouseEvent,
    data: { id: number; value: number; date: string }
  ) => {
    setDate(data.date)
    setValue(data.value)
  }

  return (
    <Wrapper>
      <ColumnsWrapper>
        <ChartColumn>
          <Title>Resumo dos extratos por dia</Title>
          {statements && (
            <Chart onMouseOver={handleOnMouseOver} data={statements} />
          )}
          {date && <DateTitle>{getDateSeparatedByBars(date)}</DateTitle>}
          {value && (
            <CurrencyText isValuePositive={value >= 0}>
              R$ {formatNumberToBrCurrency(value)}
            </CurrencyText>
          )}
        </ChartColumn>
      </ColumnsWrapper>
    </Wrapper>
  )
}

export default Home
