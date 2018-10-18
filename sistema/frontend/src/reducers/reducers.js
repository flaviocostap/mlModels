import { combineReducers } from 'redux'
import { reducerFeatures } from './featureReducer'
import { reducerErrorPaciente, reducerFieldPaciente } from './pacienteReducer'
import pesquisaReducer from './pesquisaReducer'

const rootReducer = combineReducers({
    features: reducerFeatures,
    fields: reducerFieldPaciente,
    erros: reducerErrorPaciente,
    pesquisa: pesquisaReducer,
})

export default rootReducer;