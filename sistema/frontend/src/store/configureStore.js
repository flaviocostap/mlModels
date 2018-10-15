/* eslint-disable no-underscore-dangle */
/* global window */

import { createStore, applyMiddleware, compose } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import rootReducer from '../reducers'

export const configureStoreProd = (initialState) => {
  const middlewares = [
    // Adicione ou remova middlewares aqui...

    thunk,
    promise
  ]

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
  ))
}

const configureStoreDev = (initialState) => {
  const middlewares = [
    // Adicione ou remova middlewares aqui...

    // Redux middleware responsável por emitir erros em mutações ilegais do state em/entre dispatches...
    reduxImmutableStateInvariant(),
    thunk,
    promise
  ]

  // Habilitação do Redux Dev Tools...
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
  ))
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

const store = configureStore()

export default store
