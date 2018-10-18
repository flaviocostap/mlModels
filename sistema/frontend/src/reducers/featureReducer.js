import { BUSCAR_FEATURES, UPDATE_PACIENTES } from '../actions/types';

const INITIAL_STATE = [{ nome: 'zé', id: 1, idade: 2, sexo: 'M', resultado: 1 }]

export const reducerFeatures = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BUSCAR_FEATURES:
            return action.payload
        default:
            return state
    }
}