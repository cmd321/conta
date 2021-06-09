import * as React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import { useUser } from 'services/user'

import Navbar from 'components/Navbar'
import Header from 'components/Header'

import Home from 'pages/Home'
import StatementsPage from 'pages/Statements'
import TransferPage from 'pages/Transfer'

import { routes } from './consts'
import PrivateRoute from './private'

function AccountPages(): JSX.Element {
  const { user } = useUser()

  return (
    <>
      <Navbar />
      {user && <Header user={user} />}
      <Switch>
        <PrivateRoute component={Home} path={routes.home} exact />
        <PrivateRoute component={TransferPage} path={routes.transfer} />
        <PrivateRoute component={StatementsPage} path={routes.statement} />

        <Redirect from="*" to={routes.home} />
      </Switch>
    </>
  )
}

export default AccountPages