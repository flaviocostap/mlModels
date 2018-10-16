import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { combineRedux, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

const reducers = combineReducers({
    features: () => ([{ nome:'zé', id: 1, idade:2, sexo:'M', resultado:1 }])
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        {/* <BrowserRouter> */}
            <App />
        {/* </ BrowserRouter> */}
    </Provider>, document.getElementById('root'));
registerServiceWorker();
