import * as React from 'react'

import { formatNumberToBrCurrency } from 'helpers/format'

import {
  BalanceText,
  Column,
  Content,
  HighlightedText,
  SubTitle,
  Text,
  Wrapper,
} from './styles'

type User = {
  name: string
  account: string
  agency: string
  balance: number
}

type Props = {
  user: User
}

function Header({ user }: Props): JSX.Element {
  return (
    <Wrapper>
      <Content>
        <Column>
          <Text>
            Bem-vindo <HighlightedText>{user.name}</HighlightedText>!
          </Text>
          <SubTitle>Saldo total</SubTitle>
          <BalanceText>R$ {formatNumberToBrCurrency(user.balance)}</BalanceText>
        </Column>
        <Column>
          <Text>
            agência {user.agency} conta {user.account}
          </Text>
        </Column>
      </Content>
    </Wrapper>
  )
}

export default Header
