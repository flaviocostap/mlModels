import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { combineRedux, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import ReactDOM from 'react-dom';

import featureReducer from './reducers/featureReducer'

const reducers = combineReducers({
    features: featureReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <App />
        </ BrowserRouter>
    </Provider>, document.getElementById('root'));
