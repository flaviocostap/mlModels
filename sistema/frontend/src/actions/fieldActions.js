import {  UPDATE_PACIENTES, HANDLE_CHANGE } from '../actions/types';

export const updatePatient = (item) => {
    return {
        type: UPDATE_PACIENTES,
        payload: item
    }
}

export const handleChange = (evento) => {
    return {
        type: HANDLE_CHANGE,
        payload: evento
    }
} 