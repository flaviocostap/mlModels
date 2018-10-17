import { PESQUISAR_PACIENTES } from '../actions/types';

const INITIAL_STATE = null

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case PESQUISAR_PACIENTES:
            return action.payload
        default:
            return state
    }
}