import * as React from 'react'
import { FieldError } from 'react-hook-form'

import { ReactComponent as ErrorIcon } from 'assets/exclamation.svg'

import {
  ChildrenWrapper,
  ErrorText,
  IconWrapper,
  Label,
  LabelWrapper,
  OptionalText,
  Wrapper,
} from './styles'

export type Props = {
  children?: React.ReactChild
  error?: FieldError
  icon?: React.ReactChild
  label?: string
  name: string
  optional?: boolean
}

function FieldSet({
  children,
  error,
  icon,
  label,
  name,
  optional,
}: Props): JSX.Element {
  const Icon = error?.message ? <ErrorIcon data-testid="errorIcon" /> : icon

  return (
    <Wrapper>
      {label && (
        <LabelWrapper>
          <Label htmlFor={name}>
            {label}
            {optional && <OptionalText>opcional</OptionalText>}
          </Label>
        </LabelWrapper>
      )}
      <ChildrenWrapper>
        {children}
        {Icon && <IconWrapper>{Icon}</IconWrapper>}
      </ChildrenWrapper>
      {error?.message && (
        <ErrorText data-testid="errorMessage">{error?.message}</ErrorText>
      )}
    </Wrapper>
  )
}

export default FieldSet
