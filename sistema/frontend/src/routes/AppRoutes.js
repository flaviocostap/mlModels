import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App';
import Sobre from './Sobre';
import Cadastrar from './Cadastrar';
import Arquivados from './Arquivados';

export const AppRoutes = () => (
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/cadastrar" component={Cadastrar} />
        <Route path="/arquivados" component={Arquivados} />
    </Switch>
)

export default AppRoutes
