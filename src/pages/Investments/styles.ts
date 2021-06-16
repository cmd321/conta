import styled from 'styled-components'

export const InvestmentsColumn = styled.div`
  width: 100%;
  padding-bottom: 40px;
`

export const InvestmentsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;

  & > div {
    margin-right: 20px;
    margin-bottom: 20px;
  }
`

export const Title = styled.h2`
  margin-bottom: 20px;
  margin-right: auto;

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
