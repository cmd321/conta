import styled from 'styled-components'

export const ChildrenWrapper = styled.div`
  position: relative;
`

export const ErrorText = styled.p`
  margin-top: 8px;

  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.red};
`

export const IconWrapper = styled.div`
  position: absolute;

  top: 50%;
  right: 18px;
  width: 14px;
  height: 14px;
  transform: translateY(-50%);

  svg {
    width: 14px;
    height: 14px;
  }
`

export const Label = styled.label`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
`

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-bottom: 8px;
`

export const OptionalText = styled.span`
  margin-left: 8px;

  font-style: italic;
`

export const Wrapper = styled.div`
  margin-bottom: 24px;
`
