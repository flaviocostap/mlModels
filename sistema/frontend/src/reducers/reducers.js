import { combineReducers } from 'redux'
import featureReducer from './featureReducer'
import pesquisaReducer from './pesquisaReducer'

const rootReducer = combineReducers({
    features: featureReducer,
    pesquisa: pesquisaReducer,
})

export default rootReducer;