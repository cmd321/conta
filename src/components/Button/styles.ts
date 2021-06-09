import styled from 'styled-components'

export const Wrapper = styled.button`
  width: 100%;
  height: 48px;

  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 1;

  transition: opacity 300ms ease-out;

  &:hover {
    opacity: 0.8;
  }
`

export const IconWrapper = styled.div`
  position: relative;

  top: 50%;
  transform: translateY(-50%);
`
