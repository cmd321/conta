import * as React from 'react'

import { useStatements } from 'services/statements'

import StatementList from 'components/StatementList'

import { StatementsColumn, Title, Wrapper } from './styles'

function StatementsPage(): JSX.Element {
  const { data, isLoading, limit, setSize, size } = useStatements()

  return (
    <Wrapper>
      <StatementsColumn>
        <Title>Extratos</Title>
        <StatementList
          data={data}
          hasMore={data.length < limit}
          isLoading={isLoading}
          fetchData={() => {
            setSize(size + 1)
          }}
        />
      </StatementsColumn>
    </Wrapper>
  )
}

export default StatementsPage
