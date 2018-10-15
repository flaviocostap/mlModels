import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </ BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
