import { PESQUISAR_PACIENTES, ARQUIVAR_PACIENTE } from '../actions/types';

export const changePesquisa = (pesquisa) => {
    return {
        type: PESQUISAR_PACIENTES,
        payload: pesquisa
    }
}
