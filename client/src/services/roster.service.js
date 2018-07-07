import { config } from '../helpers';
import { handleResponse, handleError } from './responseHandlers';

export const rosterService = {
    getEmployees
}

function getEmployees() {
    const url = `${config.apiRoot}/employee`;
    return fetch(url).then(handleResponse, handleError);
}