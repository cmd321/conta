import * as React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { mutate } from 'swr'

import { transferSchema } from 'schemas/transfer'
import { makeTransfer } from 'services/transfer'

import Button from 'components/Button'
import TextField, { masksTypes } from 'components/TextField'

import { ButtonWrapper, Form, Row, Title, Wrapper } from './styles'

const { useState } = React

function TransferPage() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<{ agency: string; account: string; value: number }>({
    resolver: yupResolver(transferSchema),
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (!isLoading) {
        setIsLoading(true)
        await makeTransfer(data)
        toast.success('A transferência foi efetuada com sucesso!', {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
        reset()
        mutate('/user')
        setIsLoading(false)
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.error?.message ||
        'Algo deu errado, tente novamente.'
      toast.error(errorMessage, {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
      setIsLoading(false)
    }
  })

  return (
    <Wrapper>
      <Title>Transferência</Title>
      <Form data-testid="form" onSubmit={onSubmit}>
        <Row>
          <TextField
            error={errors.agency}
            label="Agência"
            maskType={masksTypes.agency}
            placeholder="0000"
            {...register('agency')}
          />
          <TextField
            error={errors.account}
            label="Conta"
            maskType={masksTypes.account}
            placeholder="00000-0"
            {...register('account')}
          />
        </Row>
        <Row>
          <TextField
            error={errors.value}
            label="Valor"
            placeholder="R$ 0,00"
            maskType={masksTypes.currency}
            {...register('value')}
          />
        </Row>
        <Row>
          <ButtonWrapper>
            <Button loading={isLoading}>Transferir</Button>
          </ButtonWrapper>
        </Row>
      </Form>
    </Wrapper>
  )
}

export default TransferPage
