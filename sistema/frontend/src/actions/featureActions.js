import { BUSCAR_FEATURES } from '../actions/types';

export function changeFeatures(features) {
    return {
        type: BUSCAR_FEATURES,
        payload: features
    }
}