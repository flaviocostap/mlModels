import {BUSCAR_PACIENTES, CADASTRAR_PACIENTES, EDITAR_PACIENTES, ARQUIVAR_PACIENTES} from '../actions/types'


  export const clickReducer = (state = [], action) => {
    switch (action.type) {
      case 'BUSCAR_PACIENTES':
        return {
            ...state,
            newValue: action.payload.data
          };
      default:
        return state;
    }
  };