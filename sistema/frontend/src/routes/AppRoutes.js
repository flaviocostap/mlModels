import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'
import Login from '../componentes/auth/Login'
import Logout from '../componentes/auth/Logout'
import Cadastrar from '../componentes/cadastro/Cadastro'
import PaginaInicial from '../componentes/paginaInicial/PaginaInicial'

export const AppRoutes = () => (
  <Switch>
    <Route path='/login' component={Login} />
    <Route path='/logout' component={Logout} />

    <AuthenticatedRoute path='/cadastrar' component={Cadastrar} />

    <AuthenticatedRoute path='/' component={PaginaInicial} />
  </Switch>
)

export default AppRoutes
