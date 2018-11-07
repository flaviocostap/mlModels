import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App';
import Sobre from './Sobre';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/arquivados" exact={true} component={App} />
            <Route path="/sobre" component={Sobre} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
