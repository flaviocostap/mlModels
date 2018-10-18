import { PESQUISAR_PACIENTES } from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case PESQUISAR_PACIENTES:
            if(action.payload.length === 0) {
                return null
            }
            return action.payload
        default:
            return state
    }
}