import { PESQUISAR_PACIENTES } from '../actions/types';

export function changePesquisa(features) {
    return {
        type: PESQUISAR_PACIENTES,
        payload: features
    }
}