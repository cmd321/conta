import * as React from 'react'
import * as VMasker from 'vanilla-masker'

import FieldSet, { Props as FieldSetProps } from '../FieldSet'

import { Input } from './styles'

export enum masksTypes {
  account = 'account',
  agency = 'agency',
  currency = 'currency',
}

const masks = {
  [masksTypes.account]: (value: string): string => {
    return VMasker.toPattern(value, '99999-9')
  },
  [masksTypes.agency]: (value: string): string => {
    return VMasker.toPattern(value, '9999')
  },
  [masksTypes.currency]: (value: string): string => {
    return VMasker.toMoney(value, {
      precision: 2,
      separator: ',',
      delimiter: '.',
      unit: 'R$',
    })
  },
}

type Props = FieldSetProps & {
  maskType?: masksTypes
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  type?: string
  value?: string
}

const TextField = React.forwardRef(
  (
    {
      error,
      icon,
      label,
      maskType,
      name,
      onBlur,
      onChange,
      optional,
      placeholder,
      type = 'text',
      value,
    }: Props,
    ref: React.ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <FieldSet
        error={error}
        icon={icon}
        label={label}
        name={name}
        optional={optional}
      >
        <Input
          error={error?.message}
          id={name}
          name={name}
          onBlur={onBlur}
          onChange={(evt) => {
            const { target } = evt
            if (maskType) {
              const transformValue = masks[maskType]
              // eslint-disable-next-line no-param-reassign
              evt.target.value = transformValue(target.value)
            }
            if (onChange) onChange(evt)
          }}
          placeholder={placeholder}
          type={type}
          value={value}
          ref={ref}
        />
      </FieldSet>
    )
  }
)

export default TextField
