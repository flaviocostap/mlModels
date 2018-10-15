import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';
import App from './App';
import Sobre from './Sobre';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/sobre" component={Sobre} />
            {/* <Route path='*' component={ComponenteDePagina404} /> */}

        </Switch>
    </ BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
