import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'
import { paciente } from './pacientes/reducer-paciente'

export const Reducers = combineReducers({
    paciente: paciente,
});