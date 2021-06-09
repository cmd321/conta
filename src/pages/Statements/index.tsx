import * as React from 'react'

import { useStatements } from 'services/statements'

import StatementList from 'components/StatementList'

import { StatementsColumn, Title, Wrapper } from './styles'

function StatementsPage(): JSX.Element {
  const { statements } = useStatements()

  return (
    <Wrapper>
      <StatementsColumn>
        <Title>Extratos</Title>
        {statements && <StatementList data={statements} />}
      </StatementsColumn>
    </Wrapper>
  )
}

export default StatementsPage
