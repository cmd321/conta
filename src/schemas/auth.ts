import * as yup from 'yup'

import { account, agency } from './common'

export const loginSchema = yup.object({
  account,
  agency,
  password: yup.string().required('É necessário preencher este campo.'),
})
