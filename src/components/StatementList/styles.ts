import styled from 'styled-components'

export const Column = styled.div`
  display: flex;
  align-items: center;
`

export const DateText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.grey6};
`

export const IconWrapper = styled.div`
  margin-right: 12px;
`

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 12px;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 16px;
  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.grey1};
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey1};
  }
`

export const TypeContainer = styled.div``

export const TypeText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.grey5};
`

export const ValueText = styled.p<{ positive: boolean }>`
  font-weight: 900;
  font-size: 13px;
  line-height: 15px;
  color: ${({ positive, theme }) =>
    positive ? theme.colors.green : theme.colors.red};
`

export const Wrapper = styled.div`
  width: 100%;

  & > div:not(:last-child) {
    margin-bottom: 8px;
  }
`
