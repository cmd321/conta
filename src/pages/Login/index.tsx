import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

import * as userServices from 'services/user'
import { getToken } from 'services/api'
import { routes } from 'routes/consts'

import TextField, { masksTypes } from 'components/TextField'
import Button from 'components/Button'

import { loginSchema } from 'schemas/auth'

import { ButtonWrapper, Form, PageWrapper } from './styles'

const { useEffect, useState } = React

type FormValues = {
  account: string
  agency: string
  password: string
}

function LoginPage(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false)
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: yupResolver(loginSchema),
  })
  const history = useHistory()

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (!isLoading) {
        setIsLoading(true)
        await userServices.login(data)
        history.push(routes.home)
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

  useEffect(() => {
    const token = getToken()
    if (token) history.push(routes.home)
  }, [])

  return (
    <PageWrapper>
      <Form data-testid="form" onSubmit={onSubmit}>
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
        <TextField
          error={errors.password}
          label="Senha"
          type="password"
          placeholder="********"
          {...register('password')}
        />
        <ButtonWrapper>
          <Button loading={isLoading}>Entrar</Button>
        </ButtonWrapper>
      </Form>
    </PageWrapper>
  )
}

export default LoginPage
