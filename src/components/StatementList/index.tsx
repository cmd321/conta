import * as React from 'react'

import { ReactComponent as TransferIcon } from 'assets/transfer.svg'

import {
  formatNumberToBrCurrency,
  getDateSeparatedByBars,
} from 'helpers/format'

import {
  Column,
  DateText,
  IconWrapper,
  Row,
  TypeContainer,
  TypeText,
  ValueText,
  Wrapper,
} from './styles'

const statementTypes = {
  TRANSFER: 'TRANSFER',
}

const statementTypesIcons = {
  [statementTypes.TRANSFER]: <TransferIcon />,
}

const statementTypesNames = {
  [statementTypes.TRANSFER]: 'Transferência',
}

type Statement = {
  id: number
  date: string
  type: string
  value: number
}

type Props = {
  data: Statement[]
}

function StatementList({ data }: Props) {
  return (
    <Wrapper>
      {data.map((statement) => {
        const isValuePositive = statement.value >= 0
        return (
          <Row key={statement.id}>
            <Column>
              <IconWrapper>{statementTypesIcons[statement.type]}</IconWrapper>
              <TypeContainer>
                <TypeText>{statementTypesNames[statement.type]}</TypeText>
                <DateText>{getDateSeparatedByBars(statement.date)}</DateText>
              </TypeContainer>
            </Column>
            <Column>
              <ValueText positive={isValuePositive}>
                R$ {formatNumberToBrCurrency(statement.value)}
              </ValueText>
            </Column>
          </Row>
        )
      })}
    </Wrapper>
  )
}

export default StatementList
