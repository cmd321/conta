import * as React from 'react'

import {
  Button,
  ButtonsWrapper,
  Card,
  DetailsWrapper,
  SubTitle,
  Text,
  Title,
  TitleWrapper,
} from './styles'

type ButtonType = {
  text: string
}

type Props = {
  buttons: ButtonType[]
  icon: JSX.Element
  subTitle: string
  text: string
  title: string
}

function InvestmentCard({ buttons, icon, subTitle, text, title }: Props) {
  return (
    <Card>
      <TitleWrapper>
        {icon}
        <Title>{title}</Title>
      </TitleWrapper>
      <DetailsWrapper>
        <SubTitle>{subTitle}</SubTitle>
        <Text>{text}</Text>
      </DetailsWrapper>
      <ButtonsWrapper>
        {buttons.map((button, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Button key={index}>{button.text}</Button>
        ))}
      </ButtonsWrapper>
    </Card>
  )
}

export default InvestmentCard
