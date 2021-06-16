import * as React from 'react'

import { ReactComponent as SavingsIcon } from 'assets/savings.svg'
import { ReactComponent as InvestmentFund } from 'assets/investment_fund.svg'

import InvestmentCard from 'components/InvestmentCard'

import { InvestmentsColumn, InvestmentsRow, Title, Wrapper } from './styles'

function InvestmentsPage(): JSX.Element {
  return (
    <Wrapper>
      <InvestmentsColumn>
        <Title>Investimentos</Title>
        <InvestmentsRow>
          <InvestmentCard
            buttons={[{ text: 'Investir' }, { text: 'Resgatar' }]}
            icon={<SavingsIcon />}
            subTitle="Investido"
            title="Poupança"
            text="R$ 0"
          />
          <InvestmentCard
            buttons={[{ text: 'Ver todos' }]}
            icon={<InvestmentFund />}
            subTitle="Investido"
            title="Fundos de investimento"
            text="R$ 0"
          />
        </InvestmentsRow>
      </InvestmentsColumn>
    </Wrapper>
  )
}

export default InvestmentsPage
