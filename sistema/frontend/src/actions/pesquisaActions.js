import { PESQUISAR_PACIENTES } from '../actions/types';

export function changePesquisa(pesquisa) {
    return {
        type: PESQUISAR_PACIENTES,
        payload: pesquisa
    }
}