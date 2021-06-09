import styled from 'styled-components'

export const Input = styled.input<{ error?: string }>`
  width: 100%;
  padding: 18px;
  height: 48px;

  background-color: ${({ theme }) => theme.colors.grey1};
  border: 1px solid;
  border-color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.grey1};
  border-radius: 6px;

  transition: border-color 300ms ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.grey2};
  }
`
