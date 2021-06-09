import * as yup from 'yup'

export const account = yup
  .string()
  .length(7, 'É necessário preencher os 6 dígitos.')
  .required('É necessário preencher este campo.')

export const agency = yup
  .string()
  .length(4, 'É necessário preencher os 4 dígitos.')
  .required('É necessário preencher este campo.')
