import { config } from '../helpers';
import { handleResponse, handleError } from './responseHandlers';

export const testServices = {
    getValues
}

function getValues() {
    const url = `${config.apiRoot}/values`;
    return fetch(url).then(handleResponse, handleError);
}