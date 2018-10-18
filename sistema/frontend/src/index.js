import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AppRoutes from './/routes/AppRoutes';
import ReactDOM from 'react-dom';

import reducers from './reducers/reducers'
const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppRoutes />
        </ BrowserRouter>
    </Provider>, document.getElementById('root'));
