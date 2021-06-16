import styled from 'styled-components'

export const Button = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey5};
  text-transform: uppercase;
  border: none;
  background: none;
  cursor: pointer;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: auto;

  ${Button}:not(:last-child) {
    margin-right: 24px;
  }
`

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 350px;
  height: 180px;
  padding: 25px;

  background-color ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    border-radius: 10px;
    box-shadow: 0px 0px 0px ${({ theme }) => theme.colors.primary};
    transition: box-shadow 100ms ease-in-out;
  }

  &:hover::before {
    box-shadow: 6px 6px 0px ${({ theme }) => theme.colors.primary};
  }

`

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const SubTitle = styled.h5`
  margin-bottom: 5px;

  font-weight: normal;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.grey7};
  text-transform: uppercase;
`

export const Text = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey7};
`

export const Title = styled.h3`
  margin-left: 12px;

  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey7};
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  margin-bottom: 25px;
`
