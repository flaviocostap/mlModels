import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from '../App';
import Cadastrar from '../components/cadastro/Cadastrar';
import Arquivados from '../components/arquivados/homePage';

export const AppRoutes = () => (
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/cadastrar" component={Cadastrar} />
        <Route path="/arquivados" component={Arquivados} />
    </Switch>
)

export default AppRoutes
