import { VERIFICAR_ERROS, UPDATE_PACIENTES, HANDLE_CHANGE } from '../actions/types';

const INITIAL_STATE = [{ nome: 'zé', id: 1, idade: 2, sexo: 'M', resultado: 1 }]

export const reducerFieldPaciente = (state = { sexo: 'M' }, action) => {
    switch (action.type) {
        case UPDATE_PACIENTES:
            return action.payload
        default:
            return state
    }
}
export const reducerErrorPaciente = (state = {}, action) => {
    switch (action.type) {
        case VERIFICAR_ERROS:
            return action.payload
        default:
            return state
    }
}
export const reducerFields = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case HANDLE_CHANGE:
            return action.payload
        default:
            return state
    }
}