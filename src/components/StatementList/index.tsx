import * as React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { ReactComponent as TransferIcon } from 'assets/transfer.svg'

import {
  formatNumberToBrCurrency,
  getDateSeparatedByBars,
} from 'helpers/format'
import Skeleton from '../Skeleton'
import Loader, { variants } from '../Loader'

import {
  Column,
  DateText,
  IconWrapper,
  LoaderWrapper,
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
  data?: Statement[]
  hasMore: boolean
  isLoading?: boolean
  fetchData: () => void
}

function StatementList({
  data = [],
  hasMore,
  isLoading = false,
  fetchData,
}: Props) {
  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchData}
      hasMore={hasMore}
      style={{ overflow: 'visible' }}
      loader={
        <LoaderWrapper>
          <Loader variant={variants.PRIMARY} />
        </LoaderWrapper>
      }
    >
      <Wrapper>
        {isLoading
          ? // eslint-disable-next-line react/no-array-index-key
            Array.from({ length: 10 }, (_, i) => (
              <Skeleton key={i} height="63px" />
            ))
          : data.map((statement) => {
              const isValuePositive = statement.value >= 0
              return (
                <Row key={statement.id}>
                  <Column>
                    <IconWrapper>
                      {statementTypesIcons[statement.type]}
                    </IconWrapper>
                    <TypeContainer>
                      <TypeText>{statementTypesNames[statement.type]}</TypeText>
                      <DateText>
                        {getDateSeparatedByBars(statement.date)}
                      </DateText>
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
    </InfiniteScroll>
  )
}

export default StatementList
