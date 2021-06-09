import styled from 'styled-components'

export const NegativeValueRect = styled.rect`
  fill: ${({ theme }) => theme.colors.grey3};

  cursor: pointer;
`

export const PositiveValueRect = styled.rect`
  fill: ${({ theme }) => theme.colors.primary};

  cursor: pointer;
`

export const Wrapper = styled.div`
  position: relative;
`
