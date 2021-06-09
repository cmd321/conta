import * as yup from 'yup'

import { unMaskCurrency } from 'helpers/format'

import { account, agency } from './common'

export const transferSchema = yup.object({
  account,
  agency,
  value: yup
    .number()
    .transform((_, originalValue) => Number(unMaskCurrency(originalValue)))
    .min(1, 'O valor minímo para uma transferência é de R$ 1,00.')
    .max(10000, 'O valor máximo para uma transferência é de R$ 10.000,00.')
    .required('É necessário preencher este campo.'),
})
