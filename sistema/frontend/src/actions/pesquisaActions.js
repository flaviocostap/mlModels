import { PESQUISAR_PACIENTES, ARQUIVAR_PACIENTE } from '../actions/types';

export const changePesquisa = (pesquisa) => {
    console.log(pesquisa)
    return {
        type: PESQUISAR_PACIENTES,
        payload: pesquisa
    }
}
