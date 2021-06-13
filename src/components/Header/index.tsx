import * as React from 'react'

import { formatNumberToBrCurrency } from 'helpers/format'

import Skeleton from '../Skeleton'

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
  isLoading: boolean
  user: User | undefined
}

function Header({ isLoading, user }: Props): JSX.Element {
  return (
    <Wrapper>
      <Content>
        <Column>
          {isLoading || !user ? (
            <>
              <Text>
                <Skeleton height="22px" width="100px" />
              </Text>
              <SubTitle>
                <Skeleton height="13px" width="80px" />
              </SubTitle>
              <BalanceText>
                <Skeleton height="35px" width="250px" />
              </BalanceText>
            </>
          ) : (
            <>
              <Text>
                Bem-vindo <HighlightedText>{user.name}</HighlightedText>!
              </Text>
              <SubTitle>Saldo total</SubTitle>
              <BalanceText>
                R$ {formatNumberToBrCurrency(user.balance)}
              </BalanceText>
            </>
          )}
        </Column>
        <Column>
          {isLoading || !user ? (
            <Text>
              <Skeleton height="21px" width="250px" />
            </Text>
          ) : (
            <Text>
              agência {user.agency} conta {user.account}
            </Text>
          )}
        </Column>
      </Content>
    </Wrapper>
  )
}

export default Header
