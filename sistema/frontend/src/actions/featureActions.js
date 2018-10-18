import { BUSCAR_FEATURES, } from '../actions/types';

export const changeFeatures = (features) => {
    return {
        type: BUSCAR_FEATURES,
        payload: features
    }
}
