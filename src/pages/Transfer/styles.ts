import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  margin-top: 30px;
`

export const Form = styled.form`
  margin: 0 auto;
`

export const Row = styled.div`
  display: flex;

  & > div {
    width: 250px;
  }

  & > div:not(:last-child) {
    margin-right: 42px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
  }
`

export const Title = styled.h2`
  margin-bottom: 32px;

  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.grey7};
  text-transform: uppercase;
`

export const Wrapper = styled.div`
  width: 542px;

  margin: 60px auto 0 auto;

  @media (max-width: 750px) {
    width: 250px;
  }
`
