import styled from 'styled-components'

export const BalanceText = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;

  @media (max-width: 750px) {
    font-size: 22px;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  width: 90%;
  padding: 20px 110px 60px 60px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0px 0px 0px 100px;

  @media (max-width: 750px) {
    flex-direction: column-reverse;
  }
`

export const HighlightedText = styled.span`
  font-weight: 700;
`

export const SubTitle = styled.h5`
  margin-bottom: 6px;

  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 750px) {
    font-size: 10px;
  }
`

export const Text = styled.h3`
  margin-bottom: 16px;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 750px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`

export const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`
