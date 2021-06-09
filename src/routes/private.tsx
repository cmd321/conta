import * as React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { getToken } from 'services/api'

import { routes } from './consts'

const { useCallback, useLayoutEffect, useState } = React

type Props = {
  component: React.ComponentType<any>
  exact?: boolean
  path: string
}

function PrivateRoute({ component, exact, path }: Props): JSX.Element {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const checkIfHasToken = useCallback(() => {
    const token = getToken()
    setIsLoading(false)
    if (!token) setIsError(true)
  }, [])

  useLayoutEffect(() => {
    checkIfHasToken()
  }, [checkIfHasToken])

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <Redirect to={routes.login} />

  return <Route component={component} exact={exact} path={path} />
}

export default PrivateRoute
