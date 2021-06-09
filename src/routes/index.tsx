import * as React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import LoginPage from 'pages/Login'

import AccountPages from './account'

import { routes } from './consts'

type Props = {
  children?: React.ReactChild
}

function AppRouter({ children }: Props): JSX.Element {
  return (
    <>
      {children}
      <Switch>
        <Route component={LoginPage} path={routes.login} />
        <Route path={routes.account}>
          <AccountPages />
        </Route>
        <Redirect from="*" to={routes.home} />
      </Switch>
    </>
  )
}

export default AppRouter
