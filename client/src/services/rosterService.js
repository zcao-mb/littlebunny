import { config, handleResponse, handleError } from './helpers';

export const rosterService = {
    getEmployees
}

function getEmployees() {
    const url = `${config.apiRoot}/roster/employees`;
    return fetch(url).then(handleResponse, handleError);
}