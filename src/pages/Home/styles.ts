import styled from 'styled-components'

export const ChartColumn = styled.div`
  width: 800px;
  margin: 0 auto;
`

export const ColumnsWrapper = styled.div`
  display: flex;

  width: 100%;
  margin: 0 auto;
`

export const CurrencyText = styled.p<{ isValuePositive: boolean }>`
  font-weight: 800;
  font-size: 14px;
  line-height: 15px;
  color: ${({ theme, isValuePositive }) =>
    isValuePositive ? theme.colors.green : theme.colors.red};
`

export const DateTitle = styled.h3`
  margin-bottom: 4px;

  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.grey7};
`

export const Title = styled.h2`
  margin-bottom: 20px;

  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.grey7};
  text-transform: uppercase;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  max-width: 1920px;
  margin: 60px auto 0 auto;
  padding: 0 100px 0 calc(10% + 60px);

  @media (max-width: 750px) {
    padding: 0 50px 0 50px;
  }
`
